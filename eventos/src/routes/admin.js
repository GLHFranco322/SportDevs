const express = require('express');
const router = express.Router();
const producAdminController = require('../controllers/productsAdminController');
const adminCheck = require('../middlewares/adminCheck');

router
    .get('/', producAdminController.list)
    .get('/create', producAdminController.create)
    .get('/edit/:id', producAdminController.edit)
    .get('/add', producAdminController.add)
    .post('/add', producAdminController.productAdding)
    .put('/edit', producAdminController.edit)
    .get('/products/search', producAdminController.search); // Nueva ruta para buscar productos

module.exports = router;