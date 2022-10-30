import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  favorites:Product[] = [];
  cart:Product[] = [];

  constructor() { }

  addFavorite(prod:Product) {
    this.favorites.push(prod);
  }

  addToCart(prod:Product) {
    this.cart.push(prod);
  }

  delFavorite(prod:Product) {
    const index =  this.favorites.findIndex(x => x.id == prod.id)
    this.favorites.splice(index,1);
  }

  delFromCart(prod:Product) {
    const index =  this.cart.findIndex(x => x.id == prod.id)
    this.cart.splice(index,1);
  }

  checkFav(prod:Product) {
    try {
    let index = this.favorites.findIndex(x => x.id == prod.id);
    if (index != -1) {
      return true
    }
    else return false;
  } catch {return null}

}
  checkCart(prod:Product) {
    try {
    let index = this.cart.findIndex(x => x.id == prod.id);
    if (index != -1) {
      return true
    }
    else return false;
  } catch {return null}

}
  productQuantity(prod:Product) {
    let count: number = 0;
    for (let i of this.cart) {
      if (i.id == prod.id) {
        count += 1;
      }
    }
    return count;
  }

  totalPrice() {
    let price = 0;
    for (let i of this.cart) {
      price += i.price
    }
    return price;
  }

  emptyCart() {
    this.cart = [];
  }
}

