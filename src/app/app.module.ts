import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdGridListModule  } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';

import { ProductsService } from './services/products/products.service';
import { AdsService } from './services/ads/ads.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdGridListModule
  ],
  providers: [
    ProductsService,
    AdsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
