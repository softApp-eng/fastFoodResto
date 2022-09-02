import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { flipInX, zoomIn } from 'ngx-animate';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css'], animations: [
    trigger('flipInX', [transition('* => *', useAnimation(flipInX,{
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 5, delay: 0 }
    }))]),  
    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn))])
 ],
})
export class AboutComponentComponent implements OnInit {
  flipInX: any;
  zoomIn: any;
  constructor() { }

  ngOnInit(): void {
  }

}
