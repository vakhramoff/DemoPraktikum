const cards = require('../data/cards.json');

const getAll = (req, res) => {
  res.json(cards);
};

module.exports = {
  getAll,
};
