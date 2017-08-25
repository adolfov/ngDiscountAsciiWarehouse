import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MdGridListModule, MdSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';

import { ProductsService } from './services/products/products.service';
import { AdsService } from './services/ads/ads.service';
import { PricePipe } from './pipes/price.pipe';
import { RelativeTimePipe } from './pipes/relative-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductComponent,
    PricePipe,
    RelativeTimePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MdGridListModule,
    MdSelectModule
  ],
  providers: [
    ProductsService,
    AdsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
