import { Component } from '@angular/core';
import { PageType } from '@labsforge/flipbook';
import { Book } from './interfaces/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fastFood';
  book: Book = {
    width: 1190,
      height: 800,
      zoom: 1,
      cover: {
        front: {
          imageUrl: './../assets/02-right.jpeg',
        },
        back: {
          imageUrl: './../assets/02-left.jpeg',
        }
      },
      pages: [
        { // start guard section
          imageUrl: './../assets/guard.jpeg',
          backgroundColor: '#41473A', // don't use if want to see front-cover inverted image
        },
        {
          imageUrl: './../assets/guard.jpeg',
        }, // end guard section
        { // start transparent-sheet section
          imageUrl: './../assets/blank.jpeg',
        },
        {
          imageUrl: './../assets/01-left.png',
          opacity: 0.6,
        },
        {
          imageUrl: './../assets/blank.jpeg',
          opacity: 0.4,
        },
        {
          imageUrl: './../assets/blank.jpeg',
        }, // end transparent-sheet section
        {
          imageUrl: './../assets/03-left.jpeg',
        },
        {
          imageUrl: './../assets/03-right.jpeg',
        },
        {
          imageUrl: './../assets/04-left.jpeg',
        },
        {
          imageUrl: './../assets/04-right.jpeg',
        },
        {
          imageUrl: './../assets/05-left.jpeg',
        },
        {
          imageUrl: './../assets/05-right.jpeg',
        },
        {
          imageUrl: './../assets/06-left.jpeg',
        },
        {
          imageUrl: './../assets/06-right.jpeg',
        },
        { // start guard section
          imageUrl: './../assets/guard.jpeg',
        },
        {
          imageUrl: './../assets/guard.jpeg',
          backgroundColor: '#41473A', // don't use if want to see back-cover inverted image
        }, // end guard section
      ],
      pageWidth: 585,
      pageHeight: 780,
      startPageType: PageType.Double,
      endPageType: PageType.Double
  }
}
