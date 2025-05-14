const bcrypt = require('bcrypt');
const db = require('../database/models');

module.exports = {
    login: (req, res) => {
        return res.render('login', { title: 'Login', error: null }); // Asegúrate de pasar un valor inicial para 'error'
    },
    processLogin: async (req, res) => {
    try {
        const { email, password } = req.body;

        // Buscar el usuario en la base de datos
        const user = await db.Users.findOne({
            where: {
                email: email.trim()
            },
        });

        // Verificar si el usuario existe
        if (!user) {
            return res.render('login', {
                title: 'Login',
                error: 'El correo electrónico no está registrado'
            });
        }

        // Verificar si la contraseña es correcta
        if (bcrypt.compareSync(password.trim(), user.password)) {
            // Guardar los datos del usuario en la sesión
            req.session.userLogin = {
                id: user.id,
                name: user.name,
                rol: user.rolId
            };

            // Redirigir según el rol del usuario
            if (req.session.userLogin.rol == '1') {
                return res.redirect('/admin');
            }

            return res.redirect('/users/profile');
        } else {
            return res.render('login', {
                title: 'Login',
                error: 'La contraseña es incorrecta'
            });
        }
    } catch (error) {
        console.log(error);
        return res.render('login', {
            title: 'Login',
            error: 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.'
        });
    }
},
    logout: (req, res) => {
        req.session.destroy(); // Destruir la sesión
        res.clearCookie('userLogin'); // Limpiar la cookie de sesión
        res.redirect('/');
    }
};