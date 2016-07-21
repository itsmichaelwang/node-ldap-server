// server.js

// set up
var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

// express modules
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');

// express config
app.use(express.static(path.join(__dirname, '/public')));     // static files location (e.g. /public/img will be /img for users)
app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(morgan('dev'));
app.use(cookieParser(process.env.SECRET));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'false'}));

// required for passport
app.use(session({secret: process.env.SECRET}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
require('./config/passport')(passport);

// routing
require('./app/routes.js')(app, passport);

app.listen(port);
console.log("APP LISTENING: PORT " + port);
