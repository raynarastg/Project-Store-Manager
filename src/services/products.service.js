const productsModel = require('../models/products.model');
const { validateId } = require('./validations/validationsValues');

const findAll = async () => {
  const products = await productsModel.findAll();
  if (products) {
    return { value: 200, message: products };
  }
  return { error: 404, message: 'Product not found' };
};

const findById = async (id) => {
  const error = validateId(id);
  if (error.type) {
    return error;
  }

  const productId = await productsModel.findById(id);
  if (productId) return { value: 200, message: productId };
  return { error: 404, message: 'Product not found' };
};

const insertProduct = async (name) => {
  if (!name) {
    return { error: { type: 400, message: '"name" is required' } };
  }
  if (name.length < 5) {
    return { error: { type: 422, message: '"name" length must be at least 5 characters long' } };
}

  const newProductId = await productsModel.insertProduct(name);
  return newProductId;
};

module.exports = {
  findAll,
  findById,
  insertProduct,
};