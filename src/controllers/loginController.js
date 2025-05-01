const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { saveJson, readJson } = require('../db/index');

module.exports = {
    login: (req, res) => {
        return res.render('login', { title: 'Login', error: null }); // Asegúrate de pasar un valor inicial para 'error'
    },
    processLogin: (req, res) => {
        const users = readJson('users.json');
        const { email, password } = req.body;

        // Buscar al usuario por email y verificar la contraseña
        const user = users.find(user => user.email === email && bcrypt.compareSync(password, user.password));

        if (!user) {
            // Renderizar la vista con un mensaje de error si las credenciales son inválidas
            return res.render('login', {
                title: 'Login',
                error: 'Credenciales inválidas'
            });
        }

        // Guardar los datos del usuario en la sesión
        req.session.userLogin = {
            id: user.id,
            name: user.name,
            rol: user.rol
        };

        // Redirigir según el rol del usuario
        if (req.session.userLogin.rol === 'admin') {
            return res.redirect('/admin');
        }

        return res.redirect('/');
    },
    logout: (req, res) => {
        req.session.destroy(); // Destruir la sesión
        res.clearCookie('userLogin'); // Limpiar la cookie de sesión
        res.redirect('/login'); // Redirigir al login
    }
};