const {toThousands} = require('../utils');
const products = require('../db/products.json');
const db = require('../database/models');
const { readJson } = require('../db');
const {toThousand} = require('../utils');

module.exports = {
    index: (req, res) => {
    
        const products = readJson('products.json')

        const inSale = products.filter(product => product.category === 'in-sale');
        const newest = products.filter(product => product.category === 'newest');

        return res.render('index', {
            title: 'home',
            newest,
            inSale,
            toThousand
        });
    }
}