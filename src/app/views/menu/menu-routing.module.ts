import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponentComponent } from './menuComponent/menu-component.component';

const routes: Routes = [ {
  path : "menu",component:MenuComponentComponent
},{
  path : " ",component:MenuComponentComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
