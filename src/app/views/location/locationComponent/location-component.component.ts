import { TacosModalComponent } from './../../../components/tacos-modal/tacos-modal.component';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService } from 'ngx-modal-dialog';
import { flipInX, zoomIn } from 'ngx-animate';
import { transition, trigger, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-location-component',
  templateUrl: './location-component.component.html',
  styleUrls: ['./location-component.component.css'], animations: [
    trigger('flipInX', [transition('* => *', useAnimation(flipInX))]),  
    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn))])
 ],
})
export class LocationComponentComponent implements OnInit {
  flipInX: any;
  zoomIn: any;
  constructor(public modalService: ModalDialogService, public viewRef: ViewContainerRef) { }

  ngOnInit(): void {
  }
  openNewDialog() {
    this.modalService.openDialog(this.viewRef, {
      title: 'Description ',
      childComponent: TacosModalComponent,
     
       

      
    });
   
  }
}
