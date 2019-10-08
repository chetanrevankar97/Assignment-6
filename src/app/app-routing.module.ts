import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {CartComponent} from './cart/cart.component';
import {OrderComponent} from './order/order.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'nav',component:NavComponent},
  {path:'product',component:ProductComponent},
  {path:'cart',component:CartComponent},
  {path:'order',component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
