const productsModel = require('../models/products.model');

const findAll = async () => {
  const products = await productsModel.findAll();
  if (products) {
    return { value: 200, message: products };
  }
  return { error: 404, message: 'Product not found' };
};

const findById = async (id) => {
  const productId = await productsModel.findById(id);

  if (productId) return { value: 200, message: productId };
  return { error: 404, message: 'Product not found' };
};

module.exports = {
  findAll,
  findById,
};