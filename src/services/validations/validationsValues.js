const { idSchema } = require('./schema');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) {
    return { type: 'INPUT VALUE', message: '"id must be a number' };
  }
  return { type: true, message: '' };
};
module.exports = {
  validateId,
};