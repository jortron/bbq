var express = require('express');
var router = express.Router();
var User = require('../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', function(req, res, next) {
    res.render('users/new');
});

// router.post('/', function(req, res, next) {
//     console.log('Date: ' + req.body.date);
//     console.log('Notes: ' + req.body.notes);
//     console.log('row1_time: ' + req.body.row1_time);
//     console.log('row1_targetTemp: ' + req.body.row1_targetTemp);
//     console.log('row1_actualTemp: ' + req.body.row1_actualTemp);
//     console.log('row1_meatTemp: ' + req.body.row1_meatTemp);
//     console.log('row1_ambientTemp: ' + req.body.row1_ambientTemp);
//     console.log('row1_actions: ' + req.body.row1_actions);

//     console.log('row2_time: ' + req.body.row1_time);
//     console.log('row2_targetTemp: ' + req.body.row1_targetTemp);
//     console.log('row2_actualTemp: ' + req.body.row1_actualTemp);
//     console.log('row2_meatTemp: ' + req.body.row1_meatTemp);
//     console.log('row2_ambientTemp: ' + req.body.row1_ambientTemp);
//     console.log('row2_actions: ' + req.body.row1_actions);

//     console.log('row3_time: ' + req.body.row1_time);
//     console.log('row3_targetTemp: ' + req.body.row1_targetTemp);
//     console.log('row3_actualTemp: ' + req.body.row1_actualTemp);
//     console.log('row3_meatTemp: ' + req.body.row1_meatTemp);
//     console.log('row3_ambientTemp: ' + req.body.row1_ambientTemp);
//     console.log('row3_actions: ' + req.body.row1_actions);

//     console.log('row4_time: ' + req.body.row1_time);
//     console.log('row4_targetTemp: ' + req.body.row1_targetTemp);
//     console.log('row4_actualTemp: ' + req.body.row1_actualTemp);
//     console.log('row4_meatTemp: ' + req.body.row1_meatTemp);
//     console.log('row4_ambientTemp: ' + req.body.row1_ambientTemp);
//     console.log('row4_actions: ' + req.body.row1_actions);

//     console.log('row5_time: ' + req.body.row1_time);
//     console.log('row5_targetTemp: ' + req.body.row1_targetTemp);
//     console.log('row5_actualTemp: ' + req.body.row1_actualTemp);
//     console.log('row5_meatTemp: ' + req.body.row1_meatTemp);
//     console.log('row5_ambientTemp: ' + req.body.row1_ambientTemp);
//     console.log('row5_actions: ' + req.body.row1_actions);

//     console.log('row6_time: ' + req.body.row1_time);
//     console.log('row6_targetTemp: ' + req.body.row1_targetTemp);
//     console.log('row6_actualTemp: ' + req.body.row1_actualTemp);
//     console.log('row6_meatTemp: ' + req.body.row1_meatTemp);
//     console.log('row6_ambientTemp: ' + req.body.row1_ambientTemp);
//     console.log('row6_actions: ' + req.body.row1_actions);

//     console.log('row7_time: ' + req.body.row1_time);
//     console.log('row7_targetTemp: ' + req.body.row1_targetTemp);
//     console.log('row7_actualTemp: ' + req.body.row1_actualTemp);
//     console.log('row7_meatTemp: ' + req.body.row1_meatTemp);
//     console.log('row7_ambientTemp: ' + req.body.row1_ambientTemp);
//     console.log('row7_actions: ' + req.body.row1_actions);

//     console.log('row8_time: ' + req.body.row1_time);
//     console.log('row8_targetTemp: ' + req.body.row1_targetTemp);
//     console.log('row8_actualTemp: ' + req.body.row1_actualTemp);
//     console.log('row8_meatTemp: ' + req.body.row1_meatTemp);
//     console.log('row8_ambientTemp: ' + req.body.row1_ambientTemp);
//     console.log('row8_actions: ' + req.body.row1_actions);

//     console.log('row9_time: ' + req.body.row1_time);
//     console.log('row9_targetTemp: ' + req.body.row1_targetTemp);
//     console.log('row9_actualTemp: ' + req.body.row1_actualTemp);
//     console.log('row9_meatTemp: ' + req.body.row1_meatTemp);
//     console.log('row9_ambientTemp: ' + req.body.row1_ambientTemp);
//     console.log('row9_actions: ' + req.body.row1_actions);

//     console.log('row10_time: ' + req.body.row1_time);
//     console.log('row10_targetTemp: ' + req.body.row1_targetTemp);
//     console.log('row10_actualTemp: ' + req.body.row1_actualTemp);
//     console.log('row10_meatTemp: ' + req.body.row1_meatTemp);
//     console.log('row10_ambientTemp: ' + req.body.row1_ambientTemp);
//     console.log('row10_actions: ' + req.body.row1_actions);

//     console.log('row11_time: ' + req.body.row1_time);
//     console.log('row11_targetTemp: ' + req.body.row1_targetTemp);
//     console.log('row11_actualTemp: ' + req.body.row1_actualTemp);
//     console.log('row11_meatTemp: ' + req.body.row1_meatTemp);
//     console.log('row11_ambientTemp: ' + req.body.row1_ambientTemp);
//     console.log('row11_actions: ' + req.body.row1_actions);

//     console.log('row12_time: ' + req.body.row1_time);
//     console.log('row12_targetTemp: ' + req.body.row1_targetTemp);
//     console.log('row12_actualTemp: ' + req.body.row1_actualTemp);
//     console.log('row12_meatTemp: ' + req.body.row1_meatTemp);
//     console.log('row12_ambientTemp: ' + req.body.row1_ambientTemp);
//     console.log('row12_actions: ' + req.body.row1_actions);

//     console.log('row13_time: ' + req.body.row1_time);
//     console.log('row13_targetTemp: ' + req.body.row1_targetTemp);
//     console.log('row13_actualTemp: ' + req.body.row1_actualTemp);
//     console.log('row13_meatTemp: ' + req.body.row1_meatTemp);
//     console.log('row13_ambientTemp: ' + req.body.row1_ambientTemp);
//     console.log('row13_actions: ' + req.body.row1_actions);

//     console.log('row14_time: ' + req.body.row1_time);
//     console.log('row14_targetTemp: ' + req.body.row1_targetTemp);
//     console.log('row14_actualTemp: ' + req.body.row1_actualTemp);
//     console.log('row14_meatTemp: ' + req.body.row1_meatTemp);
//     console.log('row14_ambientTemp: ' + req.body.row1_ambientTemp);
//     console.log('row14_actions: ' + req.body.row1_actions);

//     console.log('row15_time: ' + req.body.row1_time);
//     console.log('row15_targetTemp: ' + req.body.row1_targetTemp);
//     console.log('row15_actualTemp: ' + req.body.row1_actualTemp);
//     console.log('row15_meatTemp: ' + req.body.row1_meatTemp);
//     console.log('row15_ambientTemp: ' + req.body.row1_ambientTemp);
//     console.log('row15_actions: ' + req.body.row1_actions);

//     console.log('finishing_serving: ' + req.body.finishing_serving);
//     console.log('finished_product: ' + req.body.finished_product);
//     console.log('next_time: ' + req.body.next_time);
//     res.end();
// });

router.post('/', function(req, res, next) {
	res.render('users/show', {
		date: req.body.date,
		notes: req.body.notes,
	    row1_time: req.body.row1_time,
	    row1_targetTemp: req.body.row1_targetTemp,
	    row1_actualTemp: req.body.row1_actualTemp,
	    row1_meatTemp: req.body.row1_meatTemp,
	    row1_ambientTemp: req.body.row1_ambientTemp,
	    row1_actions: req.body.row1_actions,

	    row2_time: req.body.row2_time,
	    row2_targetTemp: req.body.row2_targetTemp,
	    row2_actualTemp: req.body.row2_actualTemp,
	    row2_meatTemp: req.body.row2_meatTemp,
	    row2_ambientTemp: req.body.row2_ambientTemp,
	    row1_actions: req.body.row2_actions,

	    row3_time: req.body.row3_time,
	    row3_targetTemp: req.body.row3_targetTemp,
	    row3_actualTemp: req.body.row3_actualTemp,
	    row3_meatTemp: req.body.row3_meatTemp,
	    row3_ambientTemp: req.body.row3_ambientTemp,
	    row1_actions: req.body.row3_actions,

	    row4_time: req.body.row4_time,
	    row4_targetTemp: req.body.row4_targetTemp,
	    row4_actualTemp: req.body.row4_actualTemp,
	    row4_meatTemp: req.body.row4_meatTemp,
	    row4_ambientTemp: req.body.row4_ambientTemp,
	    row1_actions: req.body.row4_actions,

	    row5_time: req.body.row5_time,
	    row5_targetTemp: req.body.row5_targetTemp,
	    row5_actualTemp: req.body.row5_actualTemp,
	    row5_meatTemp: req.body.row5_meatTemp,
	    row5_ambientTemp: req.body.row5_ambientTemp,
	    row1_actions: req.body.row5_actions,

	    row6_time: req.body.row6_time,
	    row6_targetTemp: req.body.row6_targetTemp,
	    row6_actualTemp: req.body.row6_actualTemp,
	    row6_meatTemp: req.body.row6_meatTemp,
	    row6_ambientTemp: req.body.row6_ambientTemp,
	    row1_actions: req.body.row6_actions,
	    
	    row7_time: req.body.row7_time,
	    row7_targetTemp: req.body.row7_targetTemp,
	    row7_actualTemp: req.body.row7_actualTemp,
	    row7_meatTemp: req.body.row7_meatTemp,
	    row7_ambientTemp: req.body.row7_ambientTemp,
	    row1_actions: req.body.row7_actions,

	    row8_time: req.body.row8_time,
	    row8_targetTemp: req.body.row8_targetTemp,
	    row8_actualTemp: req.body.row8_actualTemp,
	    row8_meatTemp: req.body.row8_meatTemp,
	    row8_ambientTemp: req.body.row8_ambientTemp,
	    row1_actions: req.body.row8_actions,

	    row9_time: req.body.row9_time,
	    row9_targetTemp: req.body.row9_targetTemp,
	    row9_actualTemp: req.body.row9_actualTemp,
	    row9_meatTemp: req.body.row9_meatTemp,
	    row9_ambientTemp: req.body.row9_ambientTemp,
	    row1_actions: req.body.row9_actions,

	    row10_time: req.body.row10_time,
	    row10_targetTemp: req.body.row10_targetTemp,
	    row10_actualTemp: req.body.row10_actualTemp,
	    row10_meatTemp: req.body.row10_meatTemp,
	    row10_ambientTemp: req.body.row10_ambientTemp,
	    row1_actions: req.body.row10_actions,

	    row11_time: req.body.row11_time,
	    row11_targetTemp: req.body.row11_targetTemp,
	    row11_actualTemp: req.body.row11_actualTemp,
	    row11_meatTemp: req.body.row11_meatTemp,
	    row11_ambientTemp: req.body.row11_ambientTemp,
	    row1_actions: req.body.row11_actions,

	    row12_time: req.body.row12_time,
	    row12_targetTemp: req.body.row12_targetTemp,
	    row12_actualTemp: req.body.row12_actualTemp,
	    row12_meatTemp: req.body.row12_meatTemp,
	    row12_ambientTemp: req.body.row12_ambientTemp,
	    row1_actions: req.body.row12_actions,

	    row13_time: req.body.row13_time,
	    row13_targetTemp: req.body.row13_targetTemp,
	    row13_actualTemp: req.body.row13_actualTemp,
	    row13_meatTemp: req.body.row13_meatTemp,
	    row13_ambientTemp: req.body.row13_ambientTemp,
	    row1_actions: req.body.row13_actions,

	    row14_time: req.body.row14_time,
	    row14_targetTemp: req.body.row14_targetTemp,
	    row14_actualTemp: req.body.row14_actualTemp,
	    row14_meatTemp: req.body.row14_meatTemp,
	    row14_ambientTemp: req.body.row14_ambientTemp,
	    row1_actions: req.body.row14_actions,

	    row15_time: req.body.row15_time,
	    row15_targetTemp: req.body.row15_targetTemp,
	    row15_actualTemp: req.body.row15_actualTemp,
	    row15_meatTemp: req.body.row15_meatTemp,
	    row15_ambientTemp: req.body.row15_ambientTemp,   
	    row1_actions: req.body.row15_actions,

	    
	    finishing_serving: req.body.finishing_serving,
	    finished_product: req.body.finished_product,
	    next_time: req.body.next_time
    });
});

module.exports = router;
