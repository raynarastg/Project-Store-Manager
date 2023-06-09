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

const findAllSales = async () => {
  const sales = await productsModel.findAllSales();
  if (sales) {
    return { value: 200, message: sales };
  }
  return { error: 404, message: 'Sale not found' };
};

const findSalesById = async (id) => {
  const salesId = await productsModel.findSalesById(id);
  if (salesId) return { value: 200, message: salesId };
  return { error: 404, message: 'Sale not found' };
};

const updateProduct = async (id, name) => {
  const productId = await productsModel.findById(id);
  if (!productId) {
    return { value: 404, message: { message: 'Product not found' } };
  }
  if (!name) {
     return { value: 400, message: { message: '"name" is required' } };
  }
  if (name.length < 5) {
   return { value: 422, message: { message: '"name" length must be at least 5 characters long' } };
  }
  const productUpdate = await productsModel.updateProduct(id, name);
  if (productUpdate) return { value: 200, message: productUpdate };
};

const deleteProduct = async (id) => {
  const deleteProductId = await productsModel.deleteProduct(id);
  if (deleteProductId.affectedRows === 0) {
     return { value: 404, message: { message: 'Product not found' } };
  }
  return { value: 204 };
};

const deleteSales = async (id) => {
  const deleteSalesId = await productsModel.deleteSales(id);
  if (deleteSalesId.affectedRows === 0) {
     return { value: 404, message: { message: 'Sale not found' } };
  }
  return { value: 204 };
};

module.exports = {
  findAll,
  findById,
  insertProduct,
  findAllSales,
  findSalesById,
  updateProduct,
  deleteProduct,
  deleteSales,
};