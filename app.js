var express = require('express');
var path = require('path');
// var bodyParser = require('body-parser');
// var session = require('express-session');
var app = express();

var routes = require('./routes/routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(session({ 
// 	secret: 'test cookie',
// 	cookie: { maxAge: 30*24*60*60*1000 },
// 	resave: true,
// 	saveUninitialized: true 
// }));

// Routes:
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.status(err.status || 500);
	res.json({ message: 'Error! ' + err.message });
});

module.exports = app;
