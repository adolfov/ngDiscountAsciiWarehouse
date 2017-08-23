import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products/products.service';

import { Product } from '../../app.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.productsService.getProducts(1, 1, 'a').subscribe(
      (data: Product[]) => {
        this.products = data;
      }
    );
  }

}
