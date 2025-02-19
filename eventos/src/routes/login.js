var express = require('express');
var router = express.Router();
const {login, processLogin} = require('../controllers/loginController');

/* GET login page. */
router
  .get('/', login)
  .post('/processLogin', processLogin)

module.exports = router;