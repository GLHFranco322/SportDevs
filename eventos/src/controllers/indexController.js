const {toThousands} = require('../utils');
const products = require('../db/products.json');

module.exports = {
    index: (req, res) => {        
        console.log({
            userLogin : req.session.userLogin
        }
        );
        return res.render('index', { title: 'home' });
    },
    admin: (req, res) => {
        return res.render('admin', { title: 'admin' });
    },
    adminProducts: (req, res) => {
        return res.render('adminProducts', { title: 'adminProducts' });
    },
    adminUsers: (req, res) => {
        return res.render('adminUsers', { title: 'adminUsers' });
    },
}