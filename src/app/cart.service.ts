import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CartService } from '../cart.service';

@Injectable()
export class CartService {
  items = [];
  constructor(private http: HttpClient) { }

  addToCart(product) {
    this.items.push(product);
  }

  getCartItems() {
    return this.items;
  }

  clearAll() {
    this.items = [];
    return this.items;
  }

  getShippingDetails() {
    return this.http.get('/assets/shipping.json');
  }

}