const services = require('../services/products.service');

const findAll = async (_req, res) => {
  const products = await services.findAll();
  if (products.error) {
    return res.status(products.error).json({ message: products.message });
  }
  return res.status(products.value).json(products.message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const productId = await services.findById(id);
  if (productId.error) {
    return res.status(productId.error).json({ message: productId.message });
  }
  return res.status(productId.value).json(productId.message);
};

const insertProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await services.insertProduct(name);
  if (type) {
    return res.status(201).json(message);
  }
};

module.exports = {
  findAll,
  findById,
  insertProduct,
};