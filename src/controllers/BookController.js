const Booking = require('../model/Book');
const Person = require('../model/Person')

module.exports = {
  async findBookById(req, res) {
    const book = await Booking.findById(req.params.bookingId);
    
    if (book) {
      return res.json(book);
    } else {
      return res.status(400).json({ 
        error: `Booking with id: ${req.params.leasingId}, not found.`
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