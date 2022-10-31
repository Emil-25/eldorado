import { Component, OnInit } from '@angular/core';
import 'tw-elements';

@Component({
  selector: 'app-main-hero',
  templateUrl: './main-hero.component.html',
  styleUrls: ['./main-hero.component.scss']
})
export class MainHeroComponent implements OnInit {

  images = [
    "./assets/images/hero2.png",
    "./assets/images/hero3.png",
    "./assets/images/hero4.png",
    "./assets/images/hero5.png",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
