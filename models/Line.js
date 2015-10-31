var keystone = require('keystone');
var Types = keystone.Field.Types;

var Line = new keystone.List('Line', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Line.add({
	heroImage: { type: Types.CloudinaryImage },
    title: { type: String, required: true },
    state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
    stayType: {type: Types.Select, options: [
    	{value: '天子山大观台', label: 'shanshang'},
    	{value: '张家界市区', label: 'shiqu'}
    	]},
    dayType: {type: Types.Select, options: [
    	{value: '2', label: 'twoDay'},
    	{value: '3', label: 'thereDay'},
    	{value: '4', label: 'fourDay'},
    	{value: '5', label: 'fiveDay'},
    	{value: '6', label: 'sixDay'}
    	]},
    price: {type: Types.Money, format: '$0,0.00'},    	
    categories: { type: Types.Relationship, ref: 'LineCategory', many: true },    
    delprice: {type: Types.Money, format: '$0,0.00'},    
    images: { type: Types.CloudinaryImages },
    pricelist: {type: Types.Html, wysiwyg: true, height: 200},
    feature: {type: Types.Html, wysiwyg: true, height: 200},
    dayone: {
        name: {type: String, },
        am: {type: Types.Html, wysiwyg: true, height: 200},
        pm: {type: Types.Html, wysiwyg: true, height: 200},
        eat: {type: String, },
        stay: {type: String, },
        hint: {type: String, }
    },
    daytwo: {
        name: {type: String,},
        am: {type: Types.Html, wysiwyg: true, height: 200},
        pm:{type: Types.Html, wysiwyg: true, height: 200},
        eat: {type: String, },
        stay: {type: String, },
        hint:{type: String, }
    },
    daythere: {
        name:{type: String, },
        am:{type: Types.Html, wysiwyg: true, height: 200},
        pm:{type: Types.Html, wysiwyg: true, height: 200},
        eat: {type: String, },
        stay: {type: String, },
        hint:{type: String, }
    },
    dayfour: {
        name:{type: String, },
        am:{type: Types.Html, wysiwyg: true, height: 200},
        pm:{type: Types.Html, wysiwyg: true, height: 200},
        eat: {type: String, },
        stay: {type: String, },
        hint:{type: String, }
    },
    dayfive: {
        name:{type: String, },
        am:{type: Types.Html, wysiwyg: true, height: 200},
        pm:{type: Types.Html, wysiwyg: true, height: 200},
        eat: {type: String, },
        stay: {type: String, },
        hint:{type: String, }
    }        
});


Line.register();