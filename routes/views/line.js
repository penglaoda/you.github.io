var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'trave';
	locals.filters = {
		line: req.params.line
	};
	locals.data = {
		lines: []
	};
	
	// Load the current post
	view.on('init', function(next) {
		
		var q = keystone.list('Line').model.findOne({
			state: 'published',
			slug: locals.filters.line
		}).populate('categories');
		
		q.exec(function(err, result) {
			locals.data.line = result;
			next(err);
		});
		
	});
	
	// Load other posts
	view.on('init', function(next) {
		
		var q = keystone.list('Line').model.find().where('state', 'published').sort('sortOrder').limit('4');
		
		q.exec(function(err, results) {
			locals.data.lines = results;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('line');
	
};
