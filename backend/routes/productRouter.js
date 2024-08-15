import express from 'express';
const Router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

Router.get('/', asyncHandler(async(req, res) => {
    const products = await Product.find({});
    res.json(products)
}))

Router.get('/:id', asyncHandler(async(req, res) => {
    console.log(req.params.id)
    const product = await Product.findById(req.params.id);
    if (product) {
        return res.json(product)
    }

    res.status(404);
    throw new Error('Resource not found');
    
}))

export default Router;