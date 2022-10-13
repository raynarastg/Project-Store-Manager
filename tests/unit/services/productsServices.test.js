const sinon = require('sinon');
const chai = require('chai');
const productsModel = require('../../../src/models/products.model');
const productsServices = require('../../../src/services/products.service');
const { All } = require('../models/mockProducts');

const { expect } = chai;

describe('Testes de unidade model de products', async function () {
  it('', async function () {
    sinon.stub(productsModel, 'findAll').resolves(All);

    const result = await productsServices.findAll();

    expect(result.message).to.deep.equal(All);
  });

  it('retorna um erro caso a pessoa passageira não existe', async function () {
      sinon.stub(productsModel, 'findById').resolves(undefined);
     
    const result = await productsServices.findById(1);
      
      expect(result.type).to.equal('PASSENGER_NOT_FOUND');
      expect(result.message).to.equal('Passenger not found');
    });
});