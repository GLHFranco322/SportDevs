const express = require('express');
const router = express.Router();
const producAdminController = require('../controllers/productsAdminController');
const adminCheck = require('../middlewares/adminCheck');

router
    .get('/', producAdminController.list)
    .get('/create', producAdminController.create)
    .get('/edit/:id', producAdminController.edit) // Ruta para mostrar el formulario de edición
    .put('/edit/:id', producAdminController.update) // Ruta para procesar la edición
    .get('/add', producAdminController.add)
    .post('/add', producAdminController.productAdding)
    .get('/products/search', producAdminController.search); // Nueva ruta para buscar productos

module.exports = router;