const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./../config');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(require('./api/index'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(config.app.frontendPort, () => {
  console.log(`Frontend listening on port ${config.app.frontendPort}`);
});