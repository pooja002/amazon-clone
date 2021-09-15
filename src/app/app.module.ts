import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './COMPONENTS/header/header.component';
import { HomeComponent } from './PAGES/home/home.component';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import { LoginComponent } from './PAGES/login/login.component';
import { BannerComponent } from './COMPONENTS/banner/banner.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './COMPONENTS/products/products.component';
import { CheckoutProductsComponent } from './COMPONENTS/checkout-products/checkout-products.component';
import { CheckoutSubTotalComponent } from './COMPONENTS/checkout-sub-total/checkout-sub-total.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from 'src/environments/environment.prod';
// import { firebaseConfig } from 'src/app/CONFIG/firebase.config';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CheckoutComponent,
    LoginComponent,
    BannerComponent,
    ProductsComponent,
    CheckoutProductsComponent,
    CheckoutSubTotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
