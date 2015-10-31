var keystone = require('keystone');
var Types = keystone.Field.Types;

var Journey = new keystone.List('Journey', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Journey.add({
	name:{ type: String, },
    forenoon:{type: Types.Html, wysiwyg: true, height: 200},
    afternoon:{type: Types.Html, wysiwyg: true, height: 200},
    stay:{ type: String, },
    eat:{ type: String, },
    tips:{ type: String, },
});

Journey.register();