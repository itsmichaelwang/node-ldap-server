// app/routes.js

module.exports = function(app, passport) {

//// VIEWS ---------------------------------------------------------------------
	// home page
	app.get('/', function(req, res) {
		res.render('index.html', {
			userData: req.session.passport || null
		});
	});

	app.get('/login', function(req, res) {
		res.render('login.html', {
			messages: req.flash('error')
		});
	});

	app.post('/login', passport.authenticate('ldapauth', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true

	}), function(req, res) {
		console.log(req);
		res.send({status: 'ok'});
	});
};
