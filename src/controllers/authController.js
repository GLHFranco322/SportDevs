const bcrypt = require('bcrypt');
const db = require('../database/models');

module.exports = {
    login: (req, res) => {
        return res.render('login', { title: 'Login', error: null }); // Asegúrate de pasar un valor inicial para 'error'
    },
    processLogin: async (req, res) => {

        try {
            const { email, password } = req.body;
            const user = await db.Users.findOne({
                where : {
                    email : email.trim()
                },
            });
            console.log(user);
            console.log(bcrypt.compareSync(password.trim(), user.password));

            if(user && bcrypt.compareSync(password.trim(), user.password)){
                    // Guardar los datos del usuario en la sesión
                    req.session.userLogin = {
                        id: user.id,
                        name: user.name,
                        rol: user.rolId
                    };

                    if (req.session.userLogin.rol == '1') {
                        return res.redirect('/admin');
                    }
            
                    return res.redirect('/');
            } else {
                return res.render('login', {
                    title: 'Login',
                    error: 'Credenciales inválidas'
                });
            }

        } catch (error) {
            console.log(error);
            
        }
    },
    logout: (req, res) => {
        req.session.destroy(); // Destruir la sesión
        res.clearCookie('userLogin'); // Limpiar la cookie de sesión
        res.redirect('/');
    }
};