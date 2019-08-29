import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = [
    {
      id: 1,
      name: 'Pizza',
      description: 'Vegan pepperoni',
      price: 4.99,
      image: 'http://lorempixel.com/200/200/food'
    },
    {
      id: 2,
      name: 'Tacos',
      description: 'Avocados and cilantro',
      price: 3,
      image: 'http://lorempixel.com/200/200/food'
    },
    {
      id: 3,
      name: 'Curry',
      description: 'Yellow tofu curry and rice',
      price: 2,
      image: 'http://lorempixel.com/200/200/food'
    },
    {
      id: 4,
      name: 'Rice',
      description: 'Brown rice',
      price: 1,
      image: 'http://lorempixel.com/200/200/food'
    },
  ];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  public addToCart(product: Product) {
    console.log(`Adding to cart: ${product.name}`);
    this.productsService.addToCart(product);
  }

}
