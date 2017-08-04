const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  // console.log(req.name);
  // req.flash('error', 'Something Happened');
  // req.flash('error', 'Another thing happened');
  // req.flash('error', 'OH NO!!!');
  // req.flash('info', 'Something Happened');
  // req.flash('warning', 'Something Happened');
  // req.flash('success ', 'Something Happened');
  res.render('index');
};

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store' });
};

exports.createStore = async (req, res) => {
  const store = await (new Store(req.body)).save();
  // await store.save();

  // Important for ES6
  // ```` need to add backtick in sublime text 3! 
  req.flash('success', `Successfully Created ${store.name}. Care to leave a review?`);
  res.redirect(`/stores/${store.slug}`);
};

exports.getStores = async(req, res) => {
	// 1. Query the database for a list of all stores
	const stores = await Store.find();
	// console.log(stores);
	res.render('stores', {title: 'Stores', stores});
};