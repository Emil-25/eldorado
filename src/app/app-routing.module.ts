import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { SavedComponent } from './saved/saved.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'details/:id', component: ProductDetailComponent},
  {path:'saved', component: SavedComponent},
  {path:'cart', component: CartComponent},
  {path:'all-products', component: AllProductsComponent},
  {path:'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
