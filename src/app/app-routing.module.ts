import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './views/about/aboutComponent/about-component.component';
import { LocationComponentComponent } from './views/location/locationComponent/location-component.component';
import { MenuComponentComponent } from './views/menu/menuComponent/menu-component.component';
import { OrderComponentComponent } from './views/order/order-component/order-component.component';

const routes: Routes = [ {
  path : 'about',
  component : AboutComponentComponent,
  children : [{
    path : 'about',
    loadChildren : () => import('./views/about/about.module').then(m=> m.AboutModule)
  }]
},{
  path : 'location',
  component : LocationComponentComponent,
  children : [{
    path : '',
    loadChildren : () => import('./views/location/location.module').then(m=> m.LocationModule)
  }]
},
{
  path : '',
  component : MenuComponentComponent,
  children : [{
    path : '',
    loadChildren : () => import('./views/menu/menu.module').then(m=> m.MenuModule)
  }]
},
{
  path : 'menu',
  component : MenuComponentComponent,
  children : [{
    path : '',
    loadChildren : () => import('./views/menu/menu.module').then(m=> m.MenuModule)
  }]
},{
  path : 'order',
  component : OrderComponentComponent,
  children : [{
    path : '',
    loadChildren : () => import('./views/order/order.module').then(m=> m.OrderModule)
  }]
}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
