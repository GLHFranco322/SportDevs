var express = require('express');
var router = express.Router();

/* GET products page. */
router.get('/', function(req, res, next) {
  res.render('user-views/productDetail', { title: 'ProductDetail' });
});

module.exports = router;