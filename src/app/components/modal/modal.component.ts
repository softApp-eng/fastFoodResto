import { Component, ComponentRef, OnInit } from '@angular/core';
import { IModalDialog, IModalDialogButton, IModalDialogOptions, IModalDialogSettings } from 'ngx-modal-dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  actionButtons: IModalDialogButton[];
  
  constructor() {this.actionButtons = [
    { text: 'Buy', onAction: () => false } ,
    { text: 'Close', onAction: () => true },
    // no special processing here
   
  ]; }
  
  ngOnInit(): void {
    
  }

  
  dialogInit(_reference: ComponentRef<IModalDialog>, options:Partial<IModalDialogOptions<any>>) {
    // no processing needed
    options.settings =  {
     headerTitleClass : "text-center text-capitalize text-warning",
     closeButtonClass : "text-danger",
    
     }
  }

  
}
