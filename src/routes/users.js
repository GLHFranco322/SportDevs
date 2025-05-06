var express = require('express');
var router = express.Router();
const { register, processRegister, profile, update } = require('../controllers/userController');

router
    .get('/register', register)
    .post('/processRegister', processRegister)
    .get('/profile', profile)
    .put('/update/:id', update)

module.exports = router;