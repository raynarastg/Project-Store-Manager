const sinon = require('sinon');
const chai = require('chai');
const productControllers = require('../../../src/controllers/products.controllers');
const productsServices = require('../../../src/services/products.service');

const { expect } = chai;

describe('', async function () {
  // it('listando produtos', async function () {
  //   const res = {};
  //   const req = {};

  //   const productsList = [All];

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   sinon.stub(productsServices, 'findAll')
  //     .resolves({ type: null, message: productsList });
    
  //   await productControllers.findAll(req, res);

  //   expect(res.status.calledWith(200)).to.be(true);
  //   expect(res.json.calledWith(productsList)).to.be(true);
  // });

  it('Buscando uma pessoa passageira', async function () {
    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsServices, 'findById')
      .resolves({ type: null, message: productId });

    await productControllers.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productId);
  });
});