const express = require('express');
const router = express.Router();
const producAdminController = require('../controllers/productsAdminController');
const adminCheck = require('../middlewares/adminCheck');

router
    .get('/', adminCheck, producAdminController.list)
    .get('/add', adminCheck, producAdminController.add)
    .post('/productAdding', adminCheck, producAdminController.productAdding)
    .get('/edit/:id', adminCheck, producAdminController.edit)
    .put('/edit/:id', adminCheck, producAdminController.update)
    .get('/products/search', adminCheck, producAdminController.search); // Nueva ruta para buscar productos

module.exports = router;