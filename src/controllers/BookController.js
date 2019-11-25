const Book = require("../model/Book");

module.exports = {
  async findBookById(req, res) {
    const book = await Book.findById(req.params.bookingId);

    if (book) {
      return res.json(book);
    } else {
      return res.status(400).json({
        error: `Booking with id: ${req.params.bookingId}, not found.`
      });
    }
  },

  async store(req, res) {
    const book = await Book.create(req.body);

    return res.json(book);
  },

  async findAll(req, res) {
    const allBook = await Book.find();

    return res.json(allBook);
  },

  async update(req, res) {
    const book = await Book.findById(req.params.id);

    if (book) {
      book.name = req.body.name;
      book.email = req.body.email;
      book.phoneNumber = req.body.phoneNumber;
      book.bookDate = req.body.bookDate;
      book.coolMessage = req.body.coolMessage;
      book.isConfirmed = req.body.isConfirmed;

      const updatedBook = await Book.create(book);

      return res.json(updatedBook);
    } else {
      return res.status(400).json({
        error: `Não foi possível alterar a reserva com id: ${req.params.id}`
      });
    }
  },

  async delete(req, res) {
    await Book.findByIdAndDelete({ _id: req.params.id }, error => {
      if (error) {
        return res.status(400).json({
          error: `Não foi possível excluir a reserva com id: ${req.params.id}`,
          error
        });
      } else {
        return res.json();
      }
    });
  }
};
