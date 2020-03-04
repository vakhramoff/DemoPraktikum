const users = require('../data/users.json');

const getAll = (req, res) => {
  res.json(users);
};

const getById = (req, res) => {
  const user = users.find((user) => user._id === req.params.id);

  if (!user) {
    res.status(404).json({ message: 'Нет пользователя с таким id' });
    return ;
  }

  res.json(user);
};

module.exports = {
  getAll,
  getById
};
