const express = require('express');

const bodyparser = require('body-parser');
const controllers = require('./controllers/products.controllers');

const app = express();

app.use(express.json());
app.use(bodyparser.json());
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', controllers.findAll);
app.get('/products/:id', controllers.findById);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;