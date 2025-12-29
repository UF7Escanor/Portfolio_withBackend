const errorHandler = (err, req, res, next) => {
  // Handle Mongo duplicate key errors (e.g. unique email)
  if ((err.name === 'MongoServerError' || err.name === 'MongoError' || err.code === 11000) && err.code === 11000) {
    const field = err.keyValue ? Object.keys(err.keyValue)[0] : 'field';
    const value = err.keyValue ? err.keyValue[field] : '';
    const message = `${field} ${value ? `(${value}) ` : ''}already exists`;
    return res.status(400).json({ message });
  }

  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  const response = { message: err.message || 'Server Error' };
  if (process.env.NODE_ENV === 'development') response.stack = err.stack;
  res.status(statusCode).json(response);
};

export default errorHandler;
