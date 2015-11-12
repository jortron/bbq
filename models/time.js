var mongoose = require('mongoose');


var timeSchema = new mongoose.Schema({
  notes: String,
  time: Number,
  targetTemp: Number,
  actualTemp: Number,
  meatTemp: Number,
  ambientTemp: Number,
  actions: String,
  finishing_serving: String,
  finished_product: String,
  next_time: String,
  rank: Number
});

var Time = mongoose.model('Time', timeSchema);

module.exports = Time;