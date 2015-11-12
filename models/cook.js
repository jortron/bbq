var mongoose = require('mongoose');

var cookSchema = new mongoose.Schema({
  cookName: String,
  finishedNotes: String,
  improvements: String,
  rank: Number
});

var Cook = mongoose.model('Cook', cookSchema);

module.exports = Cook;