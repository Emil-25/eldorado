import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { Product } from '../Product';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  constructor(
    private product: ProductDataService,
    private favorite: FavoriteService,
  ) { }

  ngOnInit(): void {
  }

  products$ = this.product.data;
  categories$ = this.product.categorySet;


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
