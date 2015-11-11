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

router.post('/', function(req, res, next) {
    var notes = req.body.notes;
    var time = req.body.time;
    var targetTemp = req.body.targetTemp;     
    var actualTemp = req.body.actualTemp;
    var meatTemp = req.body.meatTemp; 
    var ambientTemp = req.body.ambientTemp; 
    var actions = req.body.actions; 
    var finishing_serving = req.body.finishing_serving; 
    var finished_product = req.body.finished_product; 
    var next_time = req.body.next_time; 
; 


    var newCook = User({
        notes: notes,
        time: time,
        targetTemp: targetTemp,
        actualTemp: actualTemp,
        meatTemp: meatTemp,
        ambientTemp: ambientTemp,
        actions: actions,
        finishing_serving: finishing_serving,
        finished_product: finished_product,
        next_time: next_time
    });

    // Save the user
    newCook.save(function(err) {
        if (err) console.log(err);

        res.send('Cook Saved!');
    });
});



// router.post('/new', function(req, res, next) {
// 	res.render('users/show', {
// 		date: req.body.date,
// 		notes: req.body.notes,
// 	    time: req.body.time,
// 	    targetTemp: req.body.targetTemp,
// 	    actualTemp: req.body.actualTemp,
// 	    meatTemp: req.body.meatTemp,
// 	    ambientTemp: req.body.ambientTemp,
// 	    actions: req.body.actions,
// 		finishing_serving: req.body.finishing_serving,
// 	    finished_product: req.body.finished_product,
// 	    next_time: req.body.next_time
//     });
// });

// router.get('/:name', function(req, res, next) {
//     res.render('users/show', {
// 		date: req.body.date,
// 		notes: req.body.notes,
// 	    time: req.body.time,
// 	    targetTemp: req.body.targetTemp,
// 	    actualTemp: req.body.actualTemp,
// 	    meatTemp: req.body.meatTemp,
// 	    ambientTemp: req.body.ambientTemp,
// 	    actions: req.body.actions,
// 		finishing_serving: req.body.finishing_serving,
// 	    finished_product: req.body.finished_product,
// 	    next_time: req.body.next_time
//     });
// });

// router.post('/', function(req, res, next) {
//     console.log('Date: ' + req.body.date);
//     console.log('Notes: ' + req.body.notes);
//     console.log('Time: ' + req.body.time);
//     console.log('Target Temperature: ' + req.body.targetTemp);
//     console.log('Actual Temperature: ' + req.body.actualTemp);
//     console.log('Meat Temperature: ' + req.body.meatTemp);
//     console.log('Ambient Temperature: ' + req.body.ambientTemp);
//     console.log('Actions: ' + req.body.actions);
//     console.log('Finishing and Serving: ' + req.body.finishing_serving);
//     console.log('Finished Product: ' + req.body.finished_product);
//     console.log('Next Time: ' + req.body.next_time);
//     res.end();
// });

module.exports = router;
