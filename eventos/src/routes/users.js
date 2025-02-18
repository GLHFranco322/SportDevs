var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
const { register, login, processRegister, processLogin, logout, profile, update } = require('../controllers/userController');

router
    // .get('/register', register)
    // .post('/processRegister', processRegister)
    // .get('/login', login)
    // .post('/processLogin', processLogin)
    .get(`/logout`, logout)
    .get('/profile', profile)
    // .put('/update/:id', update)

module.exports = router;