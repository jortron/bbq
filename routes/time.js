var express = require('express');
var router = express.Router();
var Time = require('../models/time');

router.post('/', function(req, res, next){
		Time.create({ notes: req.body.notes, time: req.body.time, targetTemp: req.body.targetTemp, actualTemp: req.body.actualTemp, meatTemp: req.body.meatTemp, ambientTemp: req.body.ambientTemp, actions: req.body.actions, finishing_serving: req.body.finishing_serving, finished_product: req.body.finished_product, next_time: req.body.next_time, rank: req.body.rank }, function (err, data) {

			if (err) console.log(err);
			res.redirect('users/new');
		});
});		

module.exports = router;