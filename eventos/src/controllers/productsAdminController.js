const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../db/products.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const { saveJson, readJson } = require('../db/index');


module.exports = {
    list: (req, res) => {
        const products = readJson('products.json');
        return res.render('user-views/productsAdmin', { title: 'Administrar productos', products });
    },
    edit: (req, res) => {
        const products = readJson('products.json');

        const productId = +req.params.id;
        const product = products.find(product => product.id === productId);
        if (!product) {
            return res.status(404).send('Producto no encontrado');
        }
        return res.render('productEdit', { title: 'Editar producto', product });
    },
    update: (req, res) => {
        const products = readJson('products.json');

        const productId = +req.params.id;
        const { imagen, titulo, precio, descripcion, descuento, categoria, subcategoria, marca, stock } = req.body;
        const productIndex = products.findIndex(product => product.id === productId);
        if (productIndex === -1) {
            return res.status(404).send('Producto no encontrado');
        }
        products[productIndex] = {
            ...products[productIndex],
            imagen: imagen ? imagen.trim() : products[productIndex].imagen,
            titulo: titulo ? titulo.trim() : products[productIndex].titulo,
            descripcion: descripcion ? descripcion.trim() : products[productIndex].descripcion,
            precio: +precio,
            descuento: +descuento,
            categoria,
            subcategoria,
            marca,
            stock
        };
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        return res.redirect('/admin');
    },
    add: (req, res) => {
        res.render('user-views/productAdd', { title: 'Agregar Producto' });
    },
    productAdding: (req, res) => {
        const products = readJson('products.json');

        const { imagen, titulo, precio, descripcion, descuento, categoria, subcategoria, marca, stock } = req.body;

        // Validar que todos los campos estén presentes
        if (!imagen || !titulo || !precio || !descripcion || !descuento || !categoria || !subcategoria || !marca || !stock) {
            return res.status(400).send('Todos los campos son obligatorios');
        }

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
        saveJson('products.json', products);
        return res.redirect('/products/detail/' + newProduct.id);
    },
    search: (req, res) => {
        const products = readJson('products.json');

        const productId = +req.query.productId;
        const product = products.find(product => product.id === productId);
        if (!product) {
            return res.render('user-views/productsAdmin', { title: 'Administrar productos', products, error: 'Producto no encontrado' });
        }
        return res.render('user-views/productsAdmin', { title: 'Administrar productos', products: [product] });
    }
};