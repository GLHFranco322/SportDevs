var express = require('express');
var router = express.Router();
const {register, processRegister} = require('../controllers/registerController')
const userSessionCheck = require('../middlewares/userSessionCheck');

/* GET register page. */
router
  .get('/', userSessionCheck, register)
  .post('/processRegister', processRegister)

module.exports = router;