const express = require('express');
const page1 = require('./temp1')
const page2 = require('./temp2')

const app = express();

const port = 8000;


app.get('/1', (req, res) => {
  res.json(page1);
});
app.get('/2', (req, res) => {
  res.json(page2);
});


app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
