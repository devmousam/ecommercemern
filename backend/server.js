import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
connectDB();
import productRouter from './routes/productRouter.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => { res.send("Express is working") });

app.use('/api/products', productRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => { console.log('App is connected on port 5000') });
