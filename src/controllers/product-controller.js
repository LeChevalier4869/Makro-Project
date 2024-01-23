exports.getProductsLanding = (req, res, next) => {
    res.json({ message: 'Get Products Landing Now!' });
};

exports.getProducts = (req, res, next) => {
    res.json({ message: 'Get Filtered Products' });
};

exports.getProductById = (req, res, next) => {
    res.json({ message: 'Get Product By Id' });
};

