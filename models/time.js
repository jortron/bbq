var mongoose = require('mongoose');


var timeSchema = new mongoose.Schema({
  time: Date,
  targetTemp: Number,
  actualTemp: Number,
  meatTemp: Number,
  ambientTemp: Number,
  notes: String,
});

var Time = mongoose.model('Time', timeSchema);

module.exports = Time;