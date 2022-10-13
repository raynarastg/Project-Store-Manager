const sinon = require('sinon');
const chai = require('chai');
const productsModel = require('../../../src/models/products.model');
const productsServices = require('../../../src/services/products.service');
const { All } = require('../models/mockProducts');
const { expect } = chai;

describe('Testes de unidade model de products', async function () {
  it('testa se retorna todos produtos', async function () {
    sinon.stub(productsModel, 'findAll').resolves(All);
    const result = await productsServices.findAll();
    expect(result.message).to.deep.equal(All);
  });
  it('retorna um erro caso o produto não exista', async function () {
    sinon.stub(productsModel, 'findById').resolves(undefined);
    const result = await productsServices.findById(1);
    expect(result.message).to.equal('Product not found');
    });
});