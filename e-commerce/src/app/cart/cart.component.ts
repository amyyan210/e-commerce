import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  public productsInCart: Product[];
  public subscriptions = new Subscription();

  constructor() { }

  ngOnInit() {
    // this.subscriptions.add(

    // );
    this.productsInCart = [
      {
        id: 2,
        name: 'Tacos',
        description: 'Avocados and cilantro',
        price: 3,
        image: 'http://lorempixel.com/200/200/food'
      }
    ];
  }

}
