const express = require('express');
const usersRoutes = require('./routes/users');
const cardsRoutes = require('./routes/cards');
const config = require('../back-end/config/app');

const app = express();
const port = config.appPort;
const assetsPath = config.assetsPath;

usersRoutes.setup(app);
cardsRoutes.setup(app);

app.use(express.static(assetsPath));

app.use(
  (req, res) => {
    res.status(404).json({message: 'Запрашиваемый ресурс не найден'});
  }
);

app.listen(
  port,
  () => console.log(`Приложение слушает на порту ${port}`)
);
