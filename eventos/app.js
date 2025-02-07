var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');

// Rutas
var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var registerRouter = require('./src/routes/register');
var payRouter = require('./src/routes/pay');
var productDetailRouter = require('./src/routes/productDetail');
var productAddRouter = require('./src/routes/productAdd');
var productsRouter = require('./src/routes/products');

// Cargar productos desde el archivo JSON en la carpeta 'db'
var productos = require('./src/db/products.json');
var app = express();

// Configuración del motor de vistas
app.set('views', [
  path.join(__dirname, 'src/views'),
  path.join(__dirname, 'src/views/user-views'), 
]);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Rutas principales
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/pay', payRouter);
app.use('/productDetail', productDetailRouter);
app.use('/productAdd', productAddRouter);
app.use('/products', productsRouter);

// Manejo de errores
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  // Establecer locales, solo proporcionar error en desarrollo
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderizar la página de error
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;