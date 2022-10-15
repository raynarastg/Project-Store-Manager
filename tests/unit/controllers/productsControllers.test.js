const sinon = require('sinon');
const productControllers = require('../../../src/controllers/products.controllers');

describe('Teste camada controller', async function () {
  it('testa busca por id do produto', async function () {
    const req = { params: { id: 3 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productControllers.findById(req, res);
  });

  it('testa erro na busca por id', async function () {
    const req = { params: { id: 1 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productControllers.findById(req, res);
  });
});

describe('Testando Sales', async function () {
  it('testa busca por todos Sales', async function () {
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productControllers.findAllSales(req, res);
  });

  it('testa busca por id Sales', async function () {
    const req = { params: { id: 1 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productControllers.findSalesById(req, res);
  });
});
