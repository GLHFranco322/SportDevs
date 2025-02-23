var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const { index, admin, adminProducts, adminUsers } = require('../controllers/indexController.js');
const adminCheck = require('../middlewares/adminCheck.js');

/* GET home page. */
router
    .get('/', index)

module.exports = router;
