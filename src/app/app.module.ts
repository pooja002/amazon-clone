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
import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CheckoutComponent,
    LoginComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
