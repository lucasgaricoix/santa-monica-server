const { Schema, model } = require('mongoose');

const AdressSchema = new Schema({
  adressName: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true
  }
})

module.exports = model('Adress', AdressSchema);