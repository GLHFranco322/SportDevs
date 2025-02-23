const fs = require('fs');
const path = require('path');
const { readJson, saveJson } = require('../db/index.js');
const productsFilePath = path.join(__dirname, '../db/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

module.exports = {
    list: (req, res) => {
        return res.render('user-views/productsAdmin', { title: 'Administrar productos', products });
    },
    create: (req, res) => {
        return res.render('productCreate', { title: 'Crear producto' });
    },
    edit: (req, res) => {
        return res.render('productEdit', { title: 'Editar producto' });
    },
    add: (req, res) => {
        res.render('user-views/productAdd', { title: 'Agregar Producto', categories });
    },
    productAdding: (req, res) => {
        const { imagen, titulo, precio, descripcion, descuento, categoria, subcategoria, marca, stock } = req.body;
        const newProduct = {
            id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
            imagen: imagen.trim(),
            titulo: titulo.trim(),
            descripcion: descripcion.trim(),
            precio: +precio,
            descuento: +descuento,
            categoria,
            subcategoria,
            marca,
            stock
        };
        products.push(newProduct);

        fs.writeFileSync(path.join(__dirname, '../db/products.json'), JSON.stringify(products, null, 2));

        return res.redirect('/products/detail/' + newProduct.id);
    },
    edit: (req, res) => {
        const productId = +req.params.id;
        const product = products.find(product => product.id === productId);
        if (!product) {
            return res.render('user-views/productsAdmin', { title: 'Administrar productos', products, error: 'Producto no encontrado' });
        }
        return res.render('productEdit', { title: 'Editar producto', product });
    },
    search: (req, res) => {
        const productId = +req.query.productId;
        const product = products.find(product => product.id === productId);
        if (!product) {
            return res.render('user-views/productsAdmin', { title: 'Administrar productos', products, error: 'Producto no encontrado' });
        }
        return res.render('user-views/productsAdmin', { title: 'Administrar productos', products: [product] });
    }
};