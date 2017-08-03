exports.homepage = (req, res) => {
	console.log(req.name);
	res.render('index');
};

exports.addStore = (req, res) => {
	// res.send('it works');
	res.render('editStore', {title:'Add Store'});  
};

exports.createStore = (req, res) => {
	console.log(req.body);
	res.json(req.body);
};