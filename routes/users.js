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
    var rank = req.body.rank; 
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
        next_time: next_time,
        rank: rank
    });

    // Save the user
    newCook.save(function(err) {
        if (err) console.log(err);

        res.send('Cook Saved!');
    });
});

module.exports = router;
