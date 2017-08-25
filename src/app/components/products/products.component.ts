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
  sort: string;

  constructor(private productsService: ProductsService) {
    this.sort = 'id';
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts(10, 0, this.sort)
    .subscribe(
      (data: Product[]) => {
        this.products = data;
      }
    );
  }

}
