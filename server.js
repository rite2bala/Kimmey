const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
JSONStream = require('JSONStream')
console.log("=====================>>> We are in server JS !!!!!!!")
// const invoke = require("./app/invoke-transaction");
// const query = require("./app/query");
// const helper = require("./app/helper.js");


app.get('/', (req, res) => res.send('Hello World!'))


app.use(bodyParser.json());
app.use(cors());

//Newly added lines
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
//Newly added lines end.


app.listen(port, () => console.log(`Server started on port ${port}`));

