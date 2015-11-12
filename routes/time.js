var express = require('express');
var router = express.Router();
var Time = require('../models/time');

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