import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FavoriteService } from '../favorite.service';
import { Product } from '../Product';
import { ProductDataService } from '../product-data.service';
import User from '../User';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public productsOnCart = new Set(this.cart.cart);
  _price = 0;
  userData:User = this.prodService.userData;

  constructor(
    private cart: FavoriteService,
    private prodService: ProductDataService,
    public dialog: MatDialog
    ) { }

  signed = this.prodService.signed;

  ngOnInit(): void {
    this.signed = this.prodService.signed;
    this.userData = this.prodService.userData;
  }

  openDialog(): void {
    this.dialog.open(Dialog)
  }


  addToCart(prod:Product) {
    this.cart.addToCart(prod);
  }

  delFromCart(prod:Product) {
    this.cart.delFromCart(prod);
  }

  checkCart(prod:Product) {
    return this.cart.checkCart(prod);
  }

  productQuantity(prod:Product) {
    return this.cart.productQuantity(prod);
  }

  addFav(prod:Product) {
    this.cart.addFavorite(prod);
  }

  delFav(prod:Product) {
    this.cart.delFavorite(prod);
  }


  checkFav(prod:Product) {
    return this.cart.checkFav(prod);
  }

  price() {
    return this.cart.totalPrice();
  }

}



@Component({
  selector: 'dialog-dialog',
  templateUrl: './dialog.html',
  styleUrls:['./cart.component.scss']
})
export class Dialog {
  constructor(public dialogRef: MatDialogRef<Dialog>,
    private cart: FavoriteService,
    private prodService: ProductDataService,
    public dialog: MatDialog
    ) {}
  onCart = new CartComponent(this.cart,this.prodService,this.dialog).productsOnCart

  reset() {
    this.cart.emptyCart();
    this.onCart = new Set([]);
    window.location.reload();
  }
}