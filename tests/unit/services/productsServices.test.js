const sinon = require('sinon');
const productsModel = require('../../../src/models/products.model');
const productsServices = require('../../../src/services/products.service');

describe('Testes de unidade model de products', async function () {
  it('retorna um erro caso o produto não exista', async function () {
    sinon.stub(productsModel, 'findById').resolves(undefined);
     await productsServices.findById(1);
  });
});