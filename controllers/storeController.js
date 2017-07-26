// middleware - handle the error!
exports.myMiddleware = (req, res, next) => {
	req.name = 'Paul';
	// res.cookie('name', 'Paul is cool', {maxAge: 90000}); 

	if(req.name === 'Paul'){
		throw Error('That is a stupid name!');
	}

	next();
}

exports.homepage = (req, res) => {
	console.log(req.name);
	res.render('index');
};