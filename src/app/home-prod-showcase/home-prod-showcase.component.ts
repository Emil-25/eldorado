import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { Product } from '../Product';
import { map, toArray } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import AOS from 'aos';
import { FavoriteService } from '../favorite.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-prod-showcase',
  templateUrl: './home-prod-showcase.component.html',
  styleUrls: ['./home-prod-showcase.component.scss']
})
export class HomeProdShowcaseComponent implements OnInit {

  pod:Product;
  constructor(
    private product: ProductDataService,
    private favorite: FavoriteService,
    private _snackBar: MatSnackBar
  ) { }

  openSnackBar() {
    this._snackBar.open('10$ added to your account!' , 'Wish it was true');
  }
  
  products$ = this.product.data;

  pod$ = this.products$.pipe(map(x => x[12]))
  times = [50,100,150,200]

  ngOnInit() {
    AOS.init();
    this.pod$.subscribe(res => this.pod = res)
}

  code = new FormControl('', [Validators.maxLength(12),Validators.minLength(12)]);

  getErrorMessage() {
    return this.code.hasError('minlength') ? 'Not a valid code!' : '';
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
