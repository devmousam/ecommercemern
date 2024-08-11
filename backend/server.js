import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => { res.send("Express is working") });

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    console.log(req.params.id)
    const product = products.find((p) => ( p._id === req.params.id ));
    res.json(product)
})

app.listen(port, () => { console.log('App is connected on port 5000') });
