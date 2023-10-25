import { ProductController } from './controllers/ProductController';
import { AppDataSource } from './data-source';
import { Product } from './entity/Product';
import { faker } from '@faker-js/faker';

const generateFakeProduct = (_: {}, index: number): Product => {
  const product: Product = {
    id: index + 1,
    description: faker.lorem.paragraphs({ min: 1, max: 3 }),
    price: faker.number.float({ min: 10, max: 99 }),
    quantity: faker.number.int({ min: 1, max: 30 }),
  };

  return product;
}

AppDataSource
  .initialize()
  .then(() => {
    const products = Array(100).fill({}).map(generateFakeProduct);
    const productController = new ProductController();
    products.forEach((product) => productController.registerProduct(product));
    console.log('9¾ Mischief managed');
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });