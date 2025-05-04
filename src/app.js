var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');
var session = require('express-session');
var methodOverride = require('method-override'); // Importar method-override

// Rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
var payRouter = require('./routes/pay');
var productsRouter = require('./routes/products');
var loginRouter = require('./routes/login');
var adminRouter = require('./routes/admin');

// Cargar productos desde el archivo JSON en la carpeta 'db'
var productos = require('./db/products.json');
var app = express();

// Configuración del motor de vistas
app.set('views', [
  path.join(__dirname, 'views'),
]);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..",'public')));
app.use(methodOverride('_method')); // Configurar method-override

// Configuración de la sesión
app.use(session({
  secret: 'passmil_123',
  resave: false,
  saveUninitialized: true,
  cookie: {
      maxAge: 3600000,
      httpOnly: true,
      secure: false
  }
}));

const authMiddleware = require('./middlewares/userSessionCheck');
app.use('/protected', authMiddleware);

// Middleware para agregar req a res.locals
const addReqToLocals = require('./middlewares/addreqToLocals');
app.use(addReqToLocals);

// Rutas principales
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/pay', payRouter);
app.use('/products', productsRouter);
app.use('/login', loginRouter);
app.use('/admin', adminRouter);

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