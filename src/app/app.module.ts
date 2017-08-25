import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LoadingModule } from 'ngx-loading';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MdCardModule, MdGridListModule, MdSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';

import { ProductsService } from './services/products.service';
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
    LoadingModule,
    BrowserAnimationsModule,
    FormsModule,
    MdCardModule,
    MdGridListModule,
    MdSelectModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
