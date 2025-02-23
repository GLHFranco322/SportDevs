const {toThousands} = require('../utils');
const products = require('../db/products.json');

module.exports = {
    index: (req, res) => {        
        console.log({
            userLogin : req.session.userLogin
        }
        );
        return res.render('index', { title: 'home' });
    }
}