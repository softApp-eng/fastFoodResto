import { HumModalComponent } from './../../../components/hum-modal/hum-modal.component';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService } from 'ngx-modal-dialog';
import { flipInX, zoomIn } from 'ngx-animate';
import { transition, trigger, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-order-component',
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.css'], animations: [
    trigger('flipInX', [transition('* => *', useAnimation(flipInX))]),  
    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn))])
 ],
})
export class OrderComponentComponent implements OnInit {
  flipInX: any;
  zoomIn: any;
  constructor(public modalService: ModalDialogService, public viewRef: ViewContainerRef) { }

  ngOnInit(): void {
  }
  openNewDialog() {
    this.modalService.openDialog(this.viewRef, {
      title: 'Description ',
      childComponent: HumModalComponent,
     
       

      
    });
   
  }
}
