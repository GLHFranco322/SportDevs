const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const usersFilePath = path.join(__dirname, '../data/users.json');

// Leer usuarios desde el archivo JSON
const getUsers = () => {
    const data = fs.readFileSync(usersFilePath, 'utf-8');
    return JSON.parse(data);
};

// Guardar usuarios en el archivo JSON
const saveUsers = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');
};

module.exports = {
    register: (req, res) => {
        return res.render('users/register');
    },
    processRegister: (req, res) => {
        const { name, email, password } = req.body;
        const users = getUsers();

        // Verificar si el usuario ya existe
        const userExists = users.find(user => user.email === email);
        if (userExists) {
            return res.render('users/register', { error: 'El usuario ya existe' });
        }

        // Hashear la contraseña
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Crear el nuevo usuario
        const newUser = {
            id: users.length + 1,
            email,
            firstName: name,
            lastName: surname,
            username: userName,
            password: hashedPassword,
            subscribed: subscribe === 'yes',
            role: 'user', // Asignar un rol por defecto
            address: adress,
            city,
            country
        };

        // Guardar el nuevo usuario
        users.push(newUser);
        saveUsers(users);

        return res.redirect('/');
    },
    login: (req, res) => {
        return res.render('users/login');
    },
    processLogin: (req, res) => {
        const { email, password } = req.body;
        const users = getUsers();

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