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
  const product = await services.insertProduct(name);
  if (product.error) {
    return res.status(product.error.type).json({ message: product.error.message });
  }
  return res.status(201).json(product);
};

const findAllSales = async (_req, res) => {
  const sales = await services.findAllSales();
  if (sales.error) {
    return res.status(sales.error).json({ message: sales.message });
  }
  return res.status(sales.value).json(sales.message);
};

const findSalesById = async (req, res) => {
  const { id } = req.params;
  const saleId = await services.findSalesById(id);
  if (saleId.error) {
    return res.status(saleId.error).json({ message: saleId.message });
  }
  return res.status(saleId.value).json(saleId.message);
};

module.exports = {
  findAll,
  findById,
  insertProduct,
  findAllSales,
  findSalesById,
};