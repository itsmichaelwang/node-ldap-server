// app/routes.js

module.exports = function(app) {

//// VIEWS ---------------------------------------------------------------------
	// home page
	app.get('/', function(req, res) {
		res.render('index.html', {
			// user : req.user
		});
	});

	app.post('/login', function(req, res) {
		console.log(req.body);
	});
};
