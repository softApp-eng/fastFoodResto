import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlipBookModule } from '@labsforge/flipbook';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HeaderComponent } from './shared/component/header/header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { ModalComponent } from './components/modal/modal.component';
import { TacosModalComponent } from './components/tacos-modal/tacos-modal.component';
import { HumModalComponent } from './components/hum-modal/hum-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent,
    TacosModalComponent,
    HumModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule,
    ModalDialogModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
