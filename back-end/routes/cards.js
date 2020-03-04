const cards = require('../controllers/cards');

module.exports.setup = (app) => {
  app.get('/cards', cards.getAll);
};
