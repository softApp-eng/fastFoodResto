import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponentComponent } from './locationComponent/location-component.component';

const routes: Routes = [
  {
    path : "location",  component : LocationComponentComponent
  },
  {
    path : " ",  component : LocationComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
