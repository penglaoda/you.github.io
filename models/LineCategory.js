var keystone = require('keystone');



var LineCategory = new keystone.List('LineCategory', {
	autokey: { from: 'name', path: 'key', unique: true }
});

LineCategory.add({
	name: { type: String, required: true }
});

LineCategory.relationship({ ref: 'Line', path: 'categories' });

LineCategory.register();
