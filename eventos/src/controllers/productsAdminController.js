const { readJson, saveJson } = require('../db/index.js');
const products = require('../db/products.json');

module.exports = {
    list: (req, res) => {
        return res.render('productsAdmin', { title: 'Administrar productos' });
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
    }
}