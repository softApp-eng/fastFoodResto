import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './aboutComponent/about-component.component';

const routes: Routes = [
  {path : "about" ,component : AboutComponentComponent},
  {path : " " ,component : AboutComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
