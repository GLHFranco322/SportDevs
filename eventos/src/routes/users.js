var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

// Ruta para el registro de usuarios
router.get('/register', userController.register);
router.post('/register', userController.processRegister);

// Ruta para el inicio de sesión de usuarios
router.get('/login', userController.login);
router.post('/login', userController.processLogin);

// Ruta para el perfil de usuario
router.get('/profile', userController.profile);

// Ruta para el cierre de sesión de usuarios
router.get('/logout', userController.logout);

module.exports = router;