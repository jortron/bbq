var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

var User = mongoose.model('User', userSchema);

var cooksSchema = new mongoose.Schema({
  cookName: String,
  finishedNotes: String,
  improvements: String,
  rank: Number,
});

var Cooks = mongoose.model('Cooks', cooksSchema);

// Make this available to our other files
module.exports = Cooks;

var timesSchema = new mongoose.Schema({
  time: Date,
  targetTemp: Number,
  actualTemp: Number,
  meatTemp: Number,
  ambientTemp: Number,
  notes: String,
});

var Times = mongoose.model('Times', timesSchema);