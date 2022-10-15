const sinon = require('sinon');
const productControllers = require('../../../src/controllers/products.controllers');
// const productsServices = require('../../../src/services/products.service');
// const { All } = require('../models/mockProducts');

// describe('Teste camada controller', async function () {
//  it('listando produtos', async function () {
//     const res = {};
//     // res.status = sinon.stub().returns(res);
//     res.json = sinon.stub().returns();
//       await productControllers.findAll();
//   });
// });

describe('Teste camada controller', async function () {
  it('testa busca por id do produto', async () => {
    const req = { params: { id: 3 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productControllers.findById(req, res);
  });

  it('testa erro na busca por id', async () => {
    const req = { params: { id: 1 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productControllers.findById(req, res);
  });
});

describe('Testando Sales', async function () { 
  it('testa busca por todos Sales', async () => {
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productControllers.findAllSales(req, res);
  });

  it('testa busca por id Sales', async () => {
    const req = { params: { id: 1 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productControllers.findSalesById(req, res);
  });
});

