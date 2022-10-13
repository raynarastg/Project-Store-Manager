const sinon = require('sinon');
const chai = require('chai');
const productsModel = require('../../../src/models/products.model');
const connection = require('../../../src/models/connection');
const { All } = require('./mockProducts');
const { expect } = chai;

describe('Testando camada Model', async function () {
  it('camada model', async function () {
    sinon.stub(connection, 'execute').resolves([All]);
    const result = await productsModel.findAll();
    expect(result).to.be.deep.equal(All);
  });
});