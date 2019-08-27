const Leasing = require('../model/Leasing');
const Person = require('../model/Person')

module.exports = {
  async findLeasingById(req, res) {
    const leasing = await Leasing.findById(req.params.leasingId);
    
    if (leasing) {
      return res.json(leasing);
    } else {
      return res.status(400).json({ 
        error: `Leasing with id: ${req.params.leasingId}, not found.`
      })
    }
  },

  async store(req, res) {
    const { person } = req.headers;

    personExists = await Person.findOne({ _id: person });

    const leasing = await Leasing.create({
      checkin: req.body.checkin,
      checkout: req.body.checkout,
      leasingType: req.body.leasingType,
      value: req.body.value,
      person: personExists
    });

    return res.json(leasing);
  }
}