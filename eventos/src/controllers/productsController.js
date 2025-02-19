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
    add: (req, res) => {

        const {imagen, titulo, precio, descripcion, descuento, categoria, subcategoria, marca, stock} = req.body;
        const newProduct = {
            id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
            imagen : imagen.trim(),
            titulo : titulo.trim(),
            descripcion : descripcion.trim(),
            precio : +precio,
            descuento : +descuento,
            categoria,
            subcategoria,
            marca,
            stock
        }
        products.push(newProduct);

        fs.writeFileSync(path.join(__dirname, '../db/products.json'), JSON.stringify(products, null, 2));

        return res.redirect('/products/detail/' + newProduct.id);

    },
    edit: (req, res) => {
        const products = readJson('products.json');
        const productIndex = products.findIndex(product => product.id === +req.body.id);
        if (productIndex === -1) {
            return res.status(404).send('Product not found');
        }
        products[productIndex] = {
            ...products[productIndex],
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            technical_sheet: req.body.technical_sheet,
            category: req.body.category,
            color: req.body.color
        };
        saveJson('products.json', products);
        res.redirect('/products');
    },
    update: function (req, res) {
    },
    remove: function (req, res) {

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