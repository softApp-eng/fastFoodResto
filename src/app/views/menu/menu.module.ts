import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponentComponent } from './menuComponent/menu-component.component';
import { CarouselModule } from 'ngx-owl-carousel-o';





@NgModule({
  declarations: [MenuComponentComponent,],
  imports: [
    CommonModule,
    MenuRoutingModule,
    CarouselModule
     
  ]
})
export class MenuModule { }
