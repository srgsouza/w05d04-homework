const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vampireSchema = new Schema({
  //write your schema fields here
  name: { type: String, require: true},
  hair_color: { type: String, default: 'blonde'},
  eye_color: { type: String },
  dob: {type: Date},
  loves: [{ body: String },],
  location: { type: String },
  gender: { type: String },
  victims: { type: Number, min: 0}
});

// injects your modelin into mongodb
// name, article schema
const Vampire = mongoose.model('Vampire', vampireSchema);

// This Article is our model
module.exports = Vampire;