import express from 'express';
import { ProductController } from '../controllers/ProductController';
import { Product } from '../entity/Product';

export const productsRouter = express.Router();
const productController = new ProductController();

productsRouter.post('/', async (req, res) => {
  const { description, price, quantity } = req.body;
  
  if (!description || (!price || isNaN(price)) || (!quantity || isNaN(quantity))) {
    return res.status(400).json({ message: 'Invalid inputs' });
  }

  const product = Product.createProduct(description, price, quantity);
  await productController.registerProduct(product);

  res.status(201).json({ message: 'Product registered' });
});

productsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ message: 'Invalid inputs' });
  }

  const product = await productController.findProductById(Number(id));
 
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json({ product });
});

productsRouter.get('/description/:description', async (req, res) => {
  const { description } = req.params;

  if (!description) {
    return res.status(400).json({ message: 'Invalid inputs' });
  }

  const products = await productController.findProductsByDescription(description);

  res.json({ products });
});