const productsModel = require('../models/products.model');
const { validateId } = require('./validations/validationsValues');
// , validateNewProduct
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
  // const { error } = addProductSchema.validate(name);
  // if (error) {
  //   return { type: 'INPUT VALUE', message: error.message };
  // }
  // return { type: null, message: '' };
  // const error = validateNewProduct(name);
  // if (error.type) {
  //   return error;
  // }

  const newProductId = await productsModel.insertProduct(name);
  // const newProduct = await productsModel.findById(newProductId);
  return { type: true, message: newProductId };
};

module.exports = {
  findAll,
  findById,
  insertProduct,
};