var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');
var session = require('express-session');

// Rutas
var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var registerRouter = require('./src/routes/register');
var payRouter = require('./src/routes/pay');
var productsRouter = require('./src/routes/products');
var loginRouter = require('./src/routes/login');

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


// Configuración de la sesión
app.use(session({
  secret: 'passmil_123',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 3600000,          // Tiempo máximo de la cookie (1 hora en ms)
    httpOnly: true,           // Evita acceso desde JavaScript del cliente
    secure: false             // Usar HTTPS cuando esté disponible
  }
}));

// Rutas principales
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/pay', payRouter);
app.use('/products', productsRouter);
app.use('/login', loginRouter);

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