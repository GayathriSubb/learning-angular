import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Template Driven Forms - FormsModule
// Model Driven Forms / Reactive Forms - ReactiveFormsModule

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { CartComponent } from './components/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatToolbarModule } from "@angular/material/toolbar"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card"

import { UiComponentsModule } from './modules/ui-components/ui-components.module';
import { ListingComponent } from './components/listing/listing.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { RegisterFormComponent } from './forms/register-form/register-form.component';
import { ProductlistingPageComponent } from './pages/productlisting-page/productlisting-page.component';
import { ProductdetailsPageComponent } from './pages/productdetails-page/productdetails-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    UserProfileComponent,
    ProductListingComponent,
    CartComponent,
    ListingComponent,
    HomePageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProductlistingPageComponent,
    ProductdetailsPageComponent,
    CartPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    UiComponentsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
