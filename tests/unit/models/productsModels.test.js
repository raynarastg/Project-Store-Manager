const sinon = require('sinon');
const productsModel = require('../../../src/models/products.model');

describe('Testando camada Model', async function () {
  
  it('camada model', async function () {
     const res = {};
    res.json = sinon.stub().returns();
     await productsModel.findAll();
  });
  it('inserindo novo produto', async function () {
    const res = {};
    res.json = sinon.stub().returns();
     await productsModel.insertProduct('new product');
  });
});