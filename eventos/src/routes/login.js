var express = require('express');
var router = express.Router();
const { login, processLogin, logout } = require('../controllers/loginController');
const userSessionCheck = require('../middlewares/userSessionCheck');

/* GET login page. */
router
  .get('/', userSessionCheck, login)
  .post('/processLogin', processLogin)
  .get('/logout', logout);

module.exports = router;