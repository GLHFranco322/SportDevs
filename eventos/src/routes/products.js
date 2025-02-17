const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Define la ruta para la página de productos
router.get('/', productsController.index);

// Define la ruta para los detalles del producto
router.get('/detail/:id', productsController.detail);

// Define la ruta para agregar producto
router.get('/add', (req, res) => {
    res.render('productAdd', { title: 'Agregar Producto' });
});
router.post('/add', productsController.add);

// Define la ruta para editar producto
router.get('/edit/:id', productsController.getProductById, (req, res) => {
    res.render('productEdit', { title: 'Editar Producto', product: req.product, products: req.products });
});
router.post('/edit', productsController.edit);

router.put("update/:id", productsController.update);

router.delete("remove/:id", productsController.remove);

router.get('/search', productsController.search);

module.exports = router;