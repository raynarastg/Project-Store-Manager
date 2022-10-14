const connection = require('./connection');

const findAll = async () => {
  const [resultProducts] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return resultProducts;
};

const findById = async (productId) => {
  const [[products]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId],
  );
  return products;
};

const insertProduct = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [product],
  );
  return { id: insertId, name: product };
};

const findAllSales = async () => {
  const [resultSales] = await connection.execute(
    `SELECT sale_id as saleId, date, product_id as productId, quantity 
     FROM StoreManager.sales_products
     INNER JOIN StoreManager.sales ON sale_id = id ORDER BY sale_id, product_id`,
  );
  return resultSales;
};

const findSalesById = async (salesId) => {
  const [sales] = await connection.execute(
   `SELECT date, product_id as productId, quantity FROM StoreManager.sales_products
     INNER JOIN StoreManager.sales ON sale_id = id WHERE sale_id = ?`,
    [salesId],
  );
  if (!sales || sales.length === 0) {
    return null;
  }
  return sales;
};

// Daniel Rubens me auxiliou no selects dos sales

module.exports = {
  findAll,
  findById,
  insertProduct,
  findAllSales,
  findSalesById,
};