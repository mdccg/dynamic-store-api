import { ILike, Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Product } from '../entity/Product';

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

  async findProductsByDescription(description: string): Promise<Product[]> {
    const products = await this._repo.findBy({
      description: ILike(`%${description}%`),
    });

    return products;
  }
}