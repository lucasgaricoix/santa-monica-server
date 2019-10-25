const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastName: String,
  email: {
    type: String,
    required: true
  },
  phoneNumber: String,  
  checkin: {
    type: Date,
    required: true
  },
  checkout: Date,
  coolMessage: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

module.exports = model('BookSchema', BookSchema);