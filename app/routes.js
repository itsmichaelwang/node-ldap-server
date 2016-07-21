// app/routes.js

module.exports = function(app, passport) {

//// VIEWS ---------------------------------------------------------------------
	// home page
	app.get('/', function(req, res) {
		res.render('index.html', {
			// user : req.user
		});
	});

	app.post('/login', passport.authenticate('ldapauth', {'session':false}), function(req, res) {
		console.log(req);
		res.send({status: 'ok'});
	});
};
