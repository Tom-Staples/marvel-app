const mongoose = require('mongoose');

const reqString = {
  type: String,
  required: true
};

const reqNumber = {
  type: Number,
  required: true
};

const charSchema = mongoose.Schema({
  name: reqString,
  strength: reqNumber,
  stamina: reqNumber,
  speed: reqNumber,
  agility: reqNumber,
  intelligence: reqNumber,
  powers: reqNumber
});

module.exports = mongoose.model('stats', charSchema);
