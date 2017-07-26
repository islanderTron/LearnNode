const mongoose = require('mongoose');
// When we get into querrying our database, there's a couple of ways that we can wait for our data to come back from the database because it happens synchronously 

// You can build-it callbacks | External library: Promise like Bluebird 
mongoose.Promise = global.Promise;


// library called slugs
const slug = require('slugs');

const storeSchema = mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: 'Please enter a store name!'
	},
	slug: String,
	description: {
		type: String,
		trim: true
	},
	taps: [String]
});

storeSchema.pre('save', function(next){
	if(!this.isModified('name')){
		next() // skip it
		return; // stop this function from running 
	}
	this.slug = slug(this.name) ;
	next();
	// TODO make more nesiliant so slugs are unique-2
});

module.exports = mongoose.model('Store',storeSchema);

