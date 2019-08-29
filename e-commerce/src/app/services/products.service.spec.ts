import { ProductsService } from './products.service';
import { Product } from '../models/Product';

let productsService: ProductsService;

describe('ProductsService', () => {
  beforeEach(() =>
    productsService = new ProductsService()
  );

  it('should not allow null', () => {
    expect(() => {
      productsService.addToCart(null);
    }).toThrow();
  });

  it('should not allow undefined', () => {
    expect(() => {
      productsService.addToCart(undefined);
    }).toThrow();
  });

  it('should not allow adding an empty object', () => {
    expect(() => {
      productsService.addToCart(new Product());
    }).toThrow();
  });

});
