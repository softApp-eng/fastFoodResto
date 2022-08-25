import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {
  slidesStore = [{
    description: "h1 title",
    src: '/assets/01-left.jpeg',
    title: 'pic 1'
  },
  {
    description: "h3 title",
    src: '/assets/02-left.jpeg',
    title: 'pic 1'
  },
  {
    description: "h4 title",
    src: '/assets/03-left.jpeg',
    title: 'pic 1'
  },
  {
    description: "h2 title",
    src: '/assets/04-left.jpeg',
    title: 'pic 1'
  }]



  constructor() { }

  ngOnInit(): void {
  }
  public items!: any[];

  public append() {
    this.items.push(4);
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 5000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
}
