const fs = require('fs')
const path = require('path')

const {toThousand} = require('../utils')
const categories = require('../db/categories.json')
const { readJson, saveJson } = require('../db/index.js')

module.exports = { 
    list: (req,res) => {

        const products = readJson('products.json')
        return res.render('products/products',{
            products,
            toThousand
        })
    },
    detail: (req, res) => {
        
        const products = readJson('products.json')
        const product = products.find(product => product.id === +req.params.id)
        
        return res.render('products/productDetail',{
            ...product,
            toThousand
        })
    },

    add: (req, res) => {
        return res.render('products/productAdd',{
            categories
        })
    },

    create: (req, res) => {

        const products = readJson('products.json')
        const {titulo, precio, discount, descripcion, categoria} = req.body

        const newProduct = {
            id : products[products.length - 1].id + 1,
            titulo : titulo.trim(),
            descripcion : descripcion.trim(),
            precio : +precio,
            discount : +discount,
            image : "default-image.png",
            categoria
        }

        products.push(newProduct)

        saveJson('products.json',products)

        return res.redirect('/products/detail/' + newProduct.id)
    },

    edit: (req, res ) => {
        
        const {id} = req.params
        const products = readJson('products.json')
        const categories = readJson('categories.json')

        const product = products.find(product => product.id === +id)

        return res.render('products/productEdit',{
            categories,
            ...product
        })
    },
    update: function(req, res) {

        const products = readJson('products.json')

        const {titulo, precio, descripcion, categoria} = req.body
        
        const productsModify = products.map(product => {
            if(product.id === +req.params.id){
                product.titulo = titulo.trim();
                product.precio = +precio;
                product.descripcion = descripcion.trim();
                product.categoria = categoria;
            }
            return product
        })

        saveJson('products.json',productsModify)

        return res.redirect('/admin')
    
    },
    remove: function(req,res){
        
        const products = readJson('products.json');
        const {id} = req.params;

        const productsModify = products.filter(product => product.id !== +id)

        saveJson('products.json',productsModify)

        return res.redirect('/admin')

    },

    search: function(req, res) {
  
    },

}