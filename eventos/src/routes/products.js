const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Define la ruta para la página de productos
router.get('/', productsController.index);

// Define la ruta para los detalles del producto
router.get('/detail/:id', productsController.detail);

module.exports = router;