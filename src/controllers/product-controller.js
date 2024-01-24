exports.getProductsLanding = (req, res, next) => {
    res.json({ message: 'Get Products Landing Now!' });
};

exports.getProducts = (req, res, next) => {
    const { search, promotion, brand, category } = req.query;
    res.json({ message: 'Get Filtered Products',
               search, promotion, brand, category
    });
};

exports.getProductById = (req, res, next) => {
    const { productId } = req.params;
    res.json({ message: 'Get Product By Id', productId });
};

