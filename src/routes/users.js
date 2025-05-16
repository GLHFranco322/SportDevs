// FILEPATH: c:/Users/Franco/Documents/Franco/VS Code/Integrador/Desafio Full Stack/SportDevs/src/routes/users.js
var express = require('express');
var router = express.Router();
const { register, processRegister, profile, update, uploadProfilePicture, upload } = require('../controllers/userController');

router
    .get('/register', register)
    .post('/processRegister', processRegister)
    .get('/profile', profile)
    .put('/update/:id', update)
    .post('/upload-profile-picture', upload.single('profilePicture'), uploadProfilePicture);

module.exports = router;