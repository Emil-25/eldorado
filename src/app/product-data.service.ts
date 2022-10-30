import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './Product';
import { map, concatMap, toArray, find } from 'rxjs';
import User from './User';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  _signed = false;

  userData: User;

  constructor(private http: HttpClient) { }
  
  private data$ = this.http.get<Product[]>('https://fakestoreapi.com/products');

  private categories$ = this.data$.pipe(concatMap(x => x), map(y => y.category), toArray());
  private categorySet$ = this.categories$.pipe(map(res => new Set(res)));


  get data() {
    return this.data$;
  }

  get categories() {
    return this.categories$;
  }
  get categorySet() {
    return this.categorySet$;
  }

  getProductDetail(id:number) {
    return this.data$.pipe(concatMap(x => x),find(prod => prod.id == id))
  }


  get signed() {
    return this._signed
  }
  set signed(value:boolean) {
    this._signed = value;
  }


  user(fname:string,lname:string) {
    this.userData = {
      firstName:fname,
      lastName:lname
    }
  }


}
