const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const { saveJson, readJson } = require('../db/index');

module.exports = {
    register: (req, res) => {
        return res.render('register', { title: 'register', errors: [] }); // Pasa un array vacío por defecto
    },
    processRegister: (req, res) => {
        const users = readJson('users.json');
        const { name, surname, email, password, username, subscribed, address, city, country, 're-password': rePassword } = req.body;

        // Validaciones
        const errors = [];

        if (!name || !surname || !email || !password || !username || !address || !city || !country) {
            errors.push('Todos los campos son obligatorios.');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push('El correo electrónico no es válido.');
        }

        if (password !== rePassword) {
            errors.push('Las contraseñas no coinciden.');
        }

        if (password.length < 6) {
            errors.push('La contraseña debe tener al menos 6 caracteres.');
        }

        const emailExists = users.some(user => user.email === email.trim());
        if (emailExists) {
            errors.push('El correo electrónico ya está registrado.');
        }

        const usernameExists = users.some(user => user.username === username.trim());
        if (usernameExists) {
            errors.push('El nombre de usuario ya está registrado.');
        }

        if (errors.length > 0) {
            return res.render('register', { title: 'register', errors }); // Pasa los errores a la vista
        }

        const newUser = {
            id: uuidv4(),
            email: email.trim(),
            name: name.trim(),
            surname: surname.trim(),
            password: bcrypt.hashSync(password, 10),
            token: null,
            lock: false,
            validate: true,
            username: username.trim(),
            rol: 'user',
            subscribed: subscribed || false,
            address: address.trim(),
            city: city.trim(),
            country: country.trim()
        };

        users.push(newUser);
        saveJson('users.json', users);

        return res.redirect('/login');
    }
};