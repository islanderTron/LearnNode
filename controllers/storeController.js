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
 
exports.editStore = async (req, res) => {
  // 1. Find the store given the ID
  // res.json(req.params);
  const store = await Store.findOne({_id: req.params.id});
  // res.json(store);
  // 2. confirm they are owner of the store
  // 3. Redner out the edit form so the user can update their store
  res.render('editStore',{title: `Edit ${store.name }`, store});
}

exports.updateStore = async (req, res) => {
  // findand update the stoer
  const store =  await Store.findOneAndUpdate({_id: req.params.id}, req.body, {
    new: true, // return the new store instead of the old one
    runValidators: true // stop this function from running
  }).exec();
  req.flash('success', `Successfully update <strong> ${store.name} </strong>. <a href="/stores/${store.slug}">View Store</a>`);
  res.redirect(`/stores/${store._id}/edit`); 
  // redirect them the store and tell them it worked
}









