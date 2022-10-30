import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../Product';
import { ProductDataService } from '../product-data.service';
import { Location } from '@angular/common';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product:Product | undefined;
  private product$: Subscription;


  constructor(
      private route: ActivatedRoute,
      private productService: ProductDataService,
      private favorite: FavoriteService,
      public location:Location
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.product$ = this.productService.getProductDetail(id).subscribe(res => this.product = res);
    console.log(this.favorite.favorites)

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
