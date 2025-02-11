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
    }
};

module.exports = productsController;