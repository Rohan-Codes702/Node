const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const AuthRouter = require('./Routes/AuthRouter.js');
const productRouter = require('./Routes/productRouter.js');

require('dotenv').config();
require('./Models/db.js');

// Use a port different from React dev server (5173)
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Allow requests from React dev server
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));

// Prefix auth routes with /api/auth
app.use('/api/auth', AuthRouter);
app.use('/api/products', productRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
