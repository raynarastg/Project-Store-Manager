const sinon = require('sinon');
const productsModel = require('../../../src/models/products.model');
const productsServices = require('../../../src/services/products.service');
// const productControllers = require('../../../src/controllers/products.controllers');

describe('Testes de unidade model de products', async function () {
  it('retorna um erro caso o produto não exista', async function () {
    sinon.stub(productsModel, 'findById').resolves(undefined);
     await productsServices.findById(1);
    });
});

// describe('cadastrando novos produtos', async function () {
//   // it('criando um novo produtos', async function () {
//   //   const res = {};
//   //   res.status = sinon.stub().returns(res);
//   //   res.json = sinon.stub().returns();
    
//   //   // sinon.stub(productsServices, 'insertProduct')
//   //   //   .resolves({ type: null, message: { id: 4, name: 'new product'} });
//   //     await productControllers.insertProduct('new product')
//   // });
// });