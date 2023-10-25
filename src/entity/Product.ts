import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  static createProduct(description: string, price: number, quantity: number) {
    const product = new Product();
    product.description = description;
    product.price = price;
    product.quantity = quantity;
    return product;
  }
}
