var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Import file roiuters
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sensorRouter = require('./routes/sensor');
var apiRouter = require('./routes/api');


var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

require('./socket.js')(io);

//Connection to database 
var db = require('./config/db');
mongoose.connect(db.url, (err) => {
	console.log('MongoDB is Connected..');
});

mongoose.Promise = global.Promise;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Call library header 
// app.use((req, res, next) => {
// 	res.header("Acces-Control-Allow-Origin", "*"); // * = alamat url yang mau di kontrol (client)
// 	res.header(
// 		"Acces-Control-Allow-Headers",
// 		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
// 	);
// 	if (req.method == 'OPTIONS') {
// 		res.header('Acces-Control-Allow-Methods', 'POST, GET, PUT, PATCH,UPDATE, DELETE');
// 		return res.status(200).json({});
// 	}
// 	next();
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sensor', sensorRouter);
app.use('/api', apiRouter);

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



module.exports = {app: app, server: server};
