const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const usersFilePath = path.join(__dirname, '../data/users.json');
const { v4: uuidv4, validate } = require('uuid');
const { saveJson, readJson } = require('../db/index');
const { error } = require('console');

module.exports = {
    login: (req, res) => {
        return res.render('login', { title: 'Login', req });
    },
    processLogin: (req, res) => {
        const users = readJson('users.json');
        const { email, password } = req.body;
        const user = users.find(user => user.email === email && bcrypt.compareSync(password, user.password));

        if (!user) {
            return res.redirect('login', {
                error: "Credenciales inválidas"
            });
        }

        req.session.userLogin = {
            id: user.id,
            name: user.name,
            rol: user.rol
        };

        if (req.session.userLogin.rol === 'admin') {
            return res.redirect('/admin');
        }
        
        return res.redirect('/');
    },
    logout: (req, res) => {
        // req.session.userLogin = null;
        // return res.redirect('/login');
        req.session.destroy();
        res.clearCookie("userLogin"); 
        res.redirect("/login")
    }
};