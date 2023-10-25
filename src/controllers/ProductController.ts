import { Repository } from 'typeorm';
import { Product } from '../entity/Product';
import { AppDataSource } from '../data-source';

export class ProductController {
  private _repo: Repository<Product>;

  constructor() {
    this._repo = AppDataSource.getRepository(Product);
  }

  async registerProduct(product: Product): Promise<Product> {
    try {
      const savedProduct = await this._repo.save(product);
      return savedProduct;

    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async findProductById(id: number): Promise<Product> {
    const product = await this._repo.findOneBy({ id });
    return product;
  }
}