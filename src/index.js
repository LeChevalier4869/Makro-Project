require('dotenv').config()

const express = require('express');
const multer = require('multer');
const cors = require('cors')
const errorHandler = require('../middlewares/error');
const notFoundHandler = require('../middlewares/notFound');
const authRoute = require('../routes/auth-route');
const productRoute = require('../routes/product-route');
const app = express();
const port = process.env.PORT

app.use(express());
app.use(cors());
app.use(errorHandler);
app.use('*', notFoundHandler);
app.use('/product', productRoute);
app.use('/auth', authRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//--------------------------------------------------------------