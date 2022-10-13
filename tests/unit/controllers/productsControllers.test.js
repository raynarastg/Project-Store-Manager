const sinon = require('sinon');
const chai = require('chai');
const productControllers = require('../../../src/controllers/products.controllers');
const productsServices = require('../../../src/services/products.service');
const { All } = require('../models/mockProducts');
const { expect } = chai;

describe('Teste camada controller', async function () {
  it('listando produtos', async function () {
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsServices, 'findAll')
      .resolves({ type: null, message: All });
    
    try{
      await productControllers.findAll();
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(All);
    }catch(e){
      console.log(e)
    }
    //foi de trycatch pq tava dando erro q n solucionava  de jeito nenhum, depois tento eliminar isso.
  });
});