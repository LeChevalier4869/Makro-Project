exports.getAllProducts = (req, res, next) => {
    res.json({ message: 'Get All Products' });
};

exports.getProduct = (req, res, next) => {
    res.json({ message: 'Get Product Details' });
};

exports.createProduct = (req, res, next) => {
    res.json({ message: 'Create Product' });
};

exports.updateProduct = (req, res, next) => {
    res.json({ message: 'Updated Product' });
};

exports.deleteProduct = (req, res, next) => {
    res.json({ message: 'Deleted Product' });
};