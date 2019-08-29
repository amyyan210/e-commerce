import { ProductsService } from './products.service';
import { Product } from '../models/Product';

let productsService: ProductsService;
const product: Product = {
  id: 9,
  name: 'Topo Chico',
  price: .5,
  image: 'http://lorempixel.com/200/200/food'
};
const multipleProducts: Product[] = [
  {
  id: 9,
  name: 'Topo Chico',
  price: .5,
  image: 'http://lorempixel.com/200/200/food'
  },
  {
  id: 11,
  name: 'Mac and cheese',
  price: 3.49,
  image: 'http://lorempixel.com/200/200/food'
  }
];

describe('ProductsService', () => {

  beforeEach(() =>
    productsService = new ProductsService()
  );

  describe('addToCart', () => {
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

    it('should allow adding one item', () => {
      expect(() => {
        productsService.addToCart(product);
      }).not.toThrow();
      expect(productsService.cart).toEqual([product]);
    });

  });

  describe('getCart', () => {
    // it('should allow adding one item', () => {
    //   const product: Product = {
    //     id: 9,
    //     name: 'Topo Chico',
    //     price: .5,
    //     image: 'http://lorempixel.com/200/200/food'
    //   };
    //   productsService.addToCart(product);
    //   const result = productsService.getCart();
    //   expect(result).toBe([product]);
    // });
    // it('should allow adding multiple items', () => {

    // });
  });

});
