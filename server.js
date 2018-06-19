const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const dummy = require('./dummy/dummy');
const port = process.env.PORT || 5000;

app.get('/api/list', (req, res) => {
  res.send(dummy);
});

app.listen(port, () => {
  console.log(`API is up on PORT: ${port}`);
});
