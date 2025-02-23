const fs = require('fs');
const path = require('path');

const { toThousand } = require('../utils');
const categories = require('../db/categories.json');
const { readJson, saveJson } = require('../db/index.js');

const productsController = {
    index: (req, res) => {
        const products = readJson('products.json');
        res.render('products', { title: 'Products', products, toThousand, categories });
    },
    detail: (req, res) => {
        const products = readJson('products.json');
        const product = products.find(product => product.id === +req.params.id);
        res.render('productDetail', { title: 'Product Detail', product, products, toThousand });
    },
    getProductById: (req, res, next) => {
        const products = readJson('products.json');
        const product = products.find(product => product.id === +req.params.id);
        if (!product) {
            return res.status(404).send('Producto no encontrado');
        }
        req.product = product;
        req.products = products;
        next();
    },
    search: (req, res) => {
        const products = readJson('products.json');
        const query = req.query.q.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
        res.render('products', { title: 'Search Results', products: filteredProducts, toThousand, categories });
    }
};

module.exports = productsController;