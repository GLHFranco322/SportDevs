var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');

// Rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
var payRouter = require('./routes/pay');
var productDetailRouter = require('./routes/productDetail');
var productAdd = require('./routes/productAdd');

// Cargar productos desde el archivo JSON en la carpeta 'db'
var productos = require('./db/products.json');

var app = express();

// Configuración del motor de vistas
app.set('views', [
  path.join(__dirname, 'views'),
  path.join(__dirname, 'views/user-views'), 
]);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(__dirname + '/public'));

// Rutas principales
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Ruta para productos: renderiza la vista 'products' con datos del JSON
app.get('/products', (req, res) => {
  res.render('products', {
    title: 'Lista de Productos',
    productos, // Enviar el JSON de productos a la vista
  });
});

app.use('/register', registerRouter);
app.use('/pay', payRouter);
app.use('/productDetail', productDetailRouter);
app.use('/productAdd', productAdd);

// Manejo de errores 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Manejador de errores
app.use(function(err, req, res, next) {
  // Configurar mensajes locales, solo mostrar en entorno de desarrollo
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderizar la página de error
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
