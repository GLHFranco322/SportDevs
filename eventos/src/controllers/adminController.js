

module.exports = {
    list: function (req, res) {
        const products = readJson('products.json');
        return res.render('products/productList');
    }
};