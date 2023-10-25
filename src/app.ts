import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { swaggerOptions } from './config/swagger';
import { AppDataSource } from './data-source';
import { productsRouter } from './routes/products';

AppDataSource.initialize();

export const app = express();

app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use('/products', productsRouter);

const specs = swaggerJSDoc(swaggerOptions);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));
app.get('/', (_, res) => res.send('Dynamic Store API'));