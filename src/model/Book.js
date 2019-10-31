const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: String,  
  bookDate: {
    type: Date,
    required: true
  },
  coolMessage: String,
  isConfirmed: Boolean,
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

module.exports = model('BookSchema', BookSchema);