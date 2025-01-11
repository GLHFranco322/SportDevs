var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

router.get('/', function(req, res, next) {
    var productsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/products.json'), 'utf-8'));
    res.render('products', { productos: productsData, title: 'Productos' });
});

module.exports = router;