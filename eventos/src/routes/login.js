var express = require('express');
var router = express.Router();
const {login, processLogin} = require('../controllers/loginController');
const userSessionCheck = require('../middlewares/userSessionCheck');


/* GET login page. */
router
  .get('/', userSessionCheck, login)
  .post('/processLogin', processLogin)

module.exports = router;