const { Schema, model } = require('mongoose');

const LeasingSchema = new Schema({
  checkin: {
    type: Date,
    required: true
  },
  checkout: {
    type: Date,
    required: true
  },
  leasingType: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  incident: String,
  incidentValue: Number,
  person: [{
    type: Schema.Types.ObjectId,
    ref: 'Person'
  }]
}, {
  timestamps: true
})

module.exports = model('Leasing', LeasingSchema);