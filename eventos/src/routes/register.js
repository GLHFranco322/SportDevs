var express = require('express');
var router = express.Router();
const {register, processRegister} = require('../controllers/registerController')

/* GET register page. */
router
  .get('/', register)
  .post('/processRegister', processRegister)

module.exports = router;