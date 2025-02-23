const producAdminController = require('../controllers/productsAdminController');
const express = require('express');
const router = express.Router();
const adminCheck = require('../middlewares/adminCheck');

router
    .get('/', producAdminController.list)
    .get('/create', producAdminController.create)
    .get('/edit', producAdminController.edit)
    .get('/add', producAdminController.add)
    .post('/add', producAdminController.productAdding)
    .put('/edit', producAdminController.edit)

module.exports = router;