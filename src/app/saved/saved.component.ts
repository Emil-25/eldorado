import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { Product } from '../Product';
import { Location } from '@angular/common';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {

  constructor(
    private favorite: FavoriteService,
    public location:Location
    ) { }

  savedProducts = this.favorite.favorites;

  ngOnInit(): void {
  }


  goBack() {
    this.location.back()
  }

  addFav(prod:Product) {
    this.favorite.addFavorite(prod);
    console.log(this.favorite.favorites)
  }

  delFav(prod:Product) {
    this.favorite.delFavorite(prod);
    console.log(this.favorite.favorites)
  }


  checkFav(prod:Product) {
    return this.favorite.checkFav(prod);
  }

  addToCart(prod:Product) {
    this.favorite.addToCart(prod);
  }

  delFromCart(prod:Product) {
    this.favorite.delFromCart(prod);
  }

  checkCart(prod:Product) {
    return this.favorite.checkCart(prod);
  }

  productQuantity(prod:Product) {
    return this.favorite.productQuantity(prod);
  }
}
