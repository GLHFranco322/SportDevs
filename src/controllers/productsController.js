const fs = require('fs');
const path = require('path');

const { toThousand } = require('../utils');
const categories = require('../db/categories.json');
const { readJson, saveJson } = require('../db/index.js');
const db = require('../database/models');

const productsController = {
    index: async (req, res) => {
        try {
            db.Product.findAll().then(
                products => res.render('user-views/products', { title: 'Products', products, toThousand, categories })
            )
        } catch (error) {
            console.log(error);
        }
        // const products = readJson('products.json');
    },
    detail: async (req, res) => {
        // const products = readJson('products.json');
        const { id } = req.params;
        console.log(id, "id del producto");
        try {
            const producto = await db.Product.findOne({
                where: {
                    id
                },
            })
            const productos = await db.Product.findAll();
            console.log(producto);

            if (producto) {
                return res.render('user-views/productDetail', { title: 'Product Detail', product: producto, toThousand });
            }
        }
        catch (error) {
            console.log(error);
        }
        // const product = products.find(product => product.id === +req.params.id);
        // res.render('user-views/productDetail', { title: 'Product Detail', product, products, toThousand });
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