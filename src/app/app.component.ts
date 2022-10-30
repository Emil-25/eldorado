import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { concatMap, filter, map, Observable, toArray } from 'rxjs';
import { FavoriteService } from './favorite.service';
import { Product } from './Product';
import { ProductDataService } from './product-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eldorado';
  @ViewChild('search1') search1:ElementRef;
  @ViewChild('search2') search2:ElementRef;

  constructor(private prodService: ProductDataService,
    public router:Router,
    private favorite:FavoriteService
    ) {
  }
  titles$ = this.prodService.data.pipe(concatMap(x => x), map(x => x.title))

  filteredTitles:string[];
  filteredProds$:Observable<Product[]>

  favorites = this.favorite.favorites;
  cart = this.favorite.cart;

  find(text:string) {
    this.titles$.pipe(filter(x => x.toLowerCase().indexOf(text.toLowerCase()) != -1)).subscribe(res => this.filteredTitles.push(res));
    this.filteredProds$ = this.prodService.data.pipe(concatMap(x => x),filter(x => this.filteredTitles.indexOf(x.title) != -1), toArray());
  }

  removeInput() {
    setTimeout(() => {
      this.search1.nativeElement.value = '';
      this.search2.nativeElement.value = '';
    }, 100);
  }

  reload() {
    setTimeout(() => {
      window.location.reload()
    }, 200);
    
  }

}
