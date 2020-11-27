const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT || 3000;


/**  Parsers */
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

/** Routes and methods*/
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/create', (req, res) => {
  const value = req.body; // nos regresa el valor del body envia desde el cliente
  res.send(value);
});

app.put('/update/:id', (req, res) => {  
  const id = req.params.id; // or puedes hacerlo asi const {param:{id}} = req;
  const value = req.body; // nos regresa el valor del body envia desde el cliente
  res.send(`update something with id ${id}`);
});

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id; // or puedes hacerlo asi const {param:{id}} = req;  
  res.send(`update something with id ${id}`);
});

/** Server listen to */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});