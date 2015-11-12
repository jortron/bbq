var express = require('express');
var router = express.Router();
var Cook = require('../models/cook');

router.post('/', function(req, res, next) {
  
  Cook.create({ cookName: req.body.cookname }, function (err, data) {
	  if (err) console.log(err);
	  // saved!
	  res.redirect('/users/new');
	});
});

module.exports = router;