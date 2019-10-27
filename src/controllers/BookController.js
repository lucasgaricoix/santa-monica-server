const Book = require('../model/Book');

module.exports = {
  async findBookById(req, res) {
    const book = await Book.findById(req.params.bookingId);
    
    if (book) {
      return res.json(book);
    } else {
      return res.status(400).json({ 
        error: `Booking with id: ${req.params.bookingId}, not found.`
      })
    }
  },

  async store(req, res) {

    const booking = await Book.create(req.body);

    return res.json(booking);
  },

  async findAll(req, res) {

    const allBook = await Book.find();
    console.log('allBook', allBook)
    return res.json(allBook);
  }
}