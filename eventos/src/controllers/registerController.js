const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const usersFilePath = path.join(__dirname, '../data/users.json');
const { v4: uuidv4, validate } = require('uuid');
const { saveJson, readJson } = require('../db/index');
const { error } = require('console');
const { title } = require('process');

module.exports = {
    register: (req, res) => {
        return res.render('register', {title: 'register'});
    },
    processRegister: (req, res) => {

        const users = readJson('users.json')

        const { name, surname, email, password, username, subscribed, address, city, country } = req.body;

        const newUser = {
            id: uuidv4(), // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
            email: email.trim(),
            name: name.trim(),
            surname: surname.trim(),
            password: bcrypt.hashSync(password, 10),
            token: null,
            lock: false,
            validate: true,
            username: username.trim(),
            rol: 'user',
            subscribed: subscribed,
            address: address.trim(),
            city: city.trim(),
            country: country.trim()
        };

        users.push(newUser);
        saveJson('users.json', users);

        return res.redirect('/login'); //fijate la barra
    }
}