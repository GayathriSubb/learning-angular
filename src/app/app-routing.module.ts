import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductdetailsPageComponent } from './pages/productdetails-page/productdetails-page.component';
import { ProductlistingPageComponent } from './pages/productlisting-page/productlisting-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
    // "" > /
    path: "", component: HomePageComponent, canActivate : [AuthGuard]
  },
  {
    // "products" > /products
    path: "products", component: ProductlistingPageComponent, canActivate : [AuthGuard]
  },
  {
    // "products/:productname" > /products/iphone
    path: "products/:productname", component: ProductdetailsPageComponent, canActivate : [AuthGuard]
  },
  {
    // "products/:productname" > /products/iphone
    path: "login", component: LoginPageComponent
  },
  {
    // "products/:productname" > /products/iphone
    path: "register", component: RegisterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
