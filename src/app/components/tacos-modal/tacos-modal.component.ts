import { Component, ComponentRef, OnInit } from '@angular/core';
import { IModalDialog, IModalDialogButton, IModalDialogOptions } from 'ngx-modal-dialog';

@Component({
  selector: 'app-tacos-modal',
  templateUrl: './tacos-modal.component.html',
  styleUrls: ['./tacos-modal.component.css']
})
export class TacosModalComponent implements OnInit {
  actionButtons: IModalDialogButton[];
  
  constructor() {this.actionButtons = [
    { text: 'Buy', onAction: () => false } ,
    { text: 'Close', onAction: () => true },
    // no special processing here// no special processing here
    
  ]; }

  ngOnInit(): void {
  }
  dialogInit(_reference: ComponentRef<IModalDialog>, options:Partial<IModalDialogOptions<any>>) {
    // no processing needed
    options.settings =  {
     headerTitleClass : "text-center text-capitalize text-warning",
     closeButtonClass : "text-danger"
     }
    }
}
