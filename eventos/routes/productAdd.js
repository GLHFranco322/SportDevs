var express = require('express');
var router = express.Router();

/* GET productAdd page. */
router.get('/', function(req, res, next) {
  res.render('productAdd', { title: 'ProductAdd' });
});

module.exports = router;