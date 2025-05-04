var express = require('express');
var router = express.Router();
const { login, processLogin, logout } = require('../controllers/authController');
const userSessionCheck = require('../middlewares/userSessionCheck');
const isAuth = require('../middlewares/isAuth');

/* GET login page. */
router
  .get('/', isAuth, login)
  .post('/processLogin', processLogin)
  .get('/logout', logout);

module.exports = router;