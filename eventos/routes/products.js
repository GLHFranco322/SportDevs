// Dentro de routes/products.js
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var productsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/products.json'), 'utf-8'));

router.get('/', function(req, res, next) {
    res.render('products', { productos: productsData, title: 'Productos' });
});

module.exports = router;
