const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const adminCheck = require('../middlewares/adminCheck');

// Define la ruta para la página de productos
router
    .get('/', productsController.index)
    .get('/detail/:id', productsController.detail)
    .get('/search', productsController.search);

module.exports = router;