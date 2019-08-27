const Person = require('../model/Person');

module.exports = {
  async index(req, res) {
    const personExists = await Person.findById(req.params.id);

    if (personExists) {
      return res.json(personExists)
    } else {
      return res.status(400).json({ error: 'Person not exists.' })
    }
  },

  async store(req, res) {
    const person = await Person.create(req.body);

    return res.json(person);
  }
}