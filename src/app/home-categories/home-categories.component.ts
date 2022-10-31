import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { from, map, of, tap, toArray } from 'rxjs';
import { Product } from '../Product';
import { ProductDataService } from '../product-data.service';
import AOS from "aos"

@Component({
  selector: 'app-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.scss'],
})
export class HomeCategoriesComponent implements OnInit {

  constructor(
    private product: ProductDataService,
    ) { }

  loaded = false;
  categories$ = this.product.categories.pipe(map((res => new Set(res))))


  images = [
    './assets/images/mencloth.jpg',
    './assets/images/jewellery.jpg',
    './assets/images/electronic.jpg',
    './assets/images/womencloth.jpg',
  ]

  times = [50,100,150,200]

  ngOnInit(): void {
    this.categories$.subscribe(() => this.loaded = true)
    AOS.init();
  }

  
}
