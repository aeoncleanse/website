var keystone = require('keystone');
var wp = require('../wp_connector');
var moment = require('moment');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'blog';
	locals.filters = {
		post: req.params.slug
	};
	locals.data = {
		posts: []
	};

	//Moment is used for converting timestamp to January 1st 2016...
	locals.moment = moment;

	//Grab data before rendering the page for SEO...
	wp.connect().posts().slug(req.params.slug).embed().then(function( data ) {
		locals.data.post = data[0];
		// do something with the returned posts

		// Render the view
		view.render('post');
	}).catch(function( err ) {
		// handle error
	});
	
};
