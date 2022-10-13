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

module.exports = {
  findAll,
  findById,
  insertProduct,
};