const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const usersFilePath = path.join(__dirname, '../data/users.json');
const { v4: uuidv4, validate } = require('uuid');

module.exports = {
    register: (req, res) => {
        return res.render('users/register');
    },
    processRegister: (req, res) => {
        const { name, surname, email, password} = req.body;

        const newUser = {
            id : uuidv4(), // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
            email : email.trim(),
            name : name.trim(),
            surname : surname.trim(),
            password : bcrypt.hashSync(password, 10),
            token : null,
            lock : false,
            validate : true,
            username : username.trim(),
            rol : 'user',
            subscribed : subscribed,
            address : address.trim(),
            city : city.trim(),
            country : country.trim()
        }
        
        res.send(newUser)
        res.send(req.body);
    },
    login: (req, res) => {
        return res.render('users/login');
    },
    processLogin: (req, res) => {
        const { email, password } = req.body;

        const user = users.find(user => user.email === email);

        if (user && bcrypt.compareSync(password, user.password)) {
            req.session.user = user;
            return res.redirect('/profile');
        } else {
            return res.render('users/login', { error: 'Credenciales incorrectas' });
        }
    },
    profile: (req, res) => {
        if (req.session.user) {
            return res.render('users/profile', { user: req.session.user });
        } else {
            return res.redirect('/login');
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    }
};