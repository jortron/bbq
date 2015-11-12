var mongoose = require('mongoose');

var cookSchema = new mongoose.Schema({
  cookName: String,

});

var Cook = mongoose.model('Cook', cookSchema);

module.exports = Cook;