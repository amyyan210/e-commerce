import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  addToCart(product: Product) {
    if (product === null) {
      throw new Error(`Product cannot be null.`);
    }

    if (product === undefined) {
      throw new Error(`Product cannot be undefined.`);
    }

    if (Object.keys(product).length === 0) {
      throw new Error(`Cannot add an empty product.`);
    }

    console.log(`From service - adding to cart: ${JSON.stringify(product)}`);
  }
}
