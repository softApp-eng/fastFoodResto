import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlipBookModule } from '@labsforge/flipbook';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutComponentComponent } from './views/about/aboutComponent/about-component.component';
import { LocationComponentComponent } from './views/location/locationComponent/location-component.component';
import { SharedModuleModule } from './shared/shared-module.module';
import { HeaderComponent } from './shared/component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlipBookModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
