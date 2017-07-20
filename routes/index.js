const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
	// console.log("Hey!!!");
	// res.send('Hey! It works!');


	const wes = {name: 'Paul', age: 100, cool: true};
	/*
	*  json(object) would display the JSON on the webpage
	*/
	// res.json(wes)  

	//  Request 
	res.send(req.query.name); 
	//  Type the url like this: http://localhost:7777/?name=Paul and would print "Paul" on webpage

});

module.exports = router;
