import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponentComponent } from './order-component/order-component.component';

const routes: Routes = [
  {
    path : "order",component:OrderComponentComponent
  },{
    path : " ",component:OrderComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
