const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const dummy = require('./dummy/dummy');
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get('/api/list', (req, res) => {
  res.send(dummy);
});

app.listen(port, () => {
  console.log(`API is up on PORT: ${port}`);
});
