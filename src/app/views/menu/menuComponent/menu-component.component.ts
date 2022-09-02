import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { IModalDialogSettings, ModalDialogService } from 'ngx-modal-dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, fadeInDown, flipInX, rotateInDownLeft, rotateInUpRight, zoomIn } from 'ngx-animate';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css'], animations: [
     trigger('flipInX', [transition('* => *', useAnimation(flipInX))]),  
     trigger('zoomIn', [transition('* => *', useAnimation(zoomIn))])
  ],
})
export class MenuComponentComponent implements OnInit {
  flipInX: any;
  zoomIn: any;
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
 



  constructor(public modalService: ModalDialogService, public viewRef: ViewContainerRef) { }
  //settings? : IModalDialogSettings[] | undefined;
  ngOnInit(): void {
  }
  openNewDialog() {
    this.modalService.openDialog(this.viewRef, {
      title: 'Description ',
      childComponent: ModalComponent,
     
       

      
    });
   
  }
  
  public items!: any[];

  public append() {
    this.items.push(4);
  }
 
  
}
