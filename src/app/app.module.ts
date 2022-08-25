import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlipBookModule } from '@labsforge/flipbook';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HeaderComponent } from './shared/component/header/header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
