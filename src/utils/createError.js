const createError = (statusCode, message) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    throw error;  // มี  throw error must have try and catch
};

module.exports = createError;