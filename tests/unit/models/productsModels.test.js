const sinon = require('sinon');
// const chai = require('chai');
const productsModel = require('../../../src/models/products.model');
// const connection = require('../../../src/models/connection');
// const { All } = require('./mockProducts');
// const { expect } = chai;

describe('Testando camada Model', async function () {
  
  it('camada model', async function () {
     const res = {};
    res.json = sinon.stub().returns();
     await productsModel.findAll();
  });
  it('inserindo novo produto', async function () {
    const res = {};
    res.json = sinon.stub().returns();
    // sinon.stub(connection, 'execute').resolves(4);
     await productsModel.insertProduct('new product');
    // expect(result).to.be.deep.equal(4);
  });
});