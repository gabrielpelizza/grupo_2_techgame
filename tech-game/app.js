var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');

const session = require('express-session')
const localCheck = require('./middlewares/localsCheck')
const cookieCheck = require('./middlewares/cookieCheck')
/* RUTAS */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productosRouter = require('./routes/productos')
/* var detalleRouter = require('./routes/detalle')
var carrito = require('./routes/carrito') */
var adminRouter = require('./routes/admin')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(session({
  secret : "frase secreta"
}));


app.use(localCheck);

app.use(cookieCheck);


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter);
/* app.use('/detalle', detalleRouter);
app.use('/carrito', carrito) */
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
