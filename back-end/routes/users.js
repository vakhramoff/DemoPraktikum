const users = require('../controllers/users');

module.exports.setup = (app) => {
  app.get('/users', users.getAll);
  app.get('/users/:id', users.getById);
};
