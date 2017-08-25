import { Component, OnInit, HostListener, Inject } from '@angular/core';

import { ProductsService } from '../../services/products.service';

import { Product } from '../../app.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  sort: string;
  limit: number;
  skip: number;

  loading = false;
  noMoreProducts = false;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.init();
  }

  getProducts() {
    this.loading = true;
    this.productsService.getProducts(this.limit, this.skip, this.sort)
    .subscribe(
      (data: Product[]) => {
        if (data) {
          this.products.push(...data);
        } else {
          this.noMoreProducts = true;
        }
        this.loading = false;
      }
    );
  }

  getMoreProducts() {
    if (!this.loading && !this.noMoreProducts) {
      this.skip += this.limit;
      this.getProducts();
    }
  }

  getAdUrl(index) {
    return '/ad/?r=' + index;
  }

  init() {
    this.sort = 'id';
    this.limit = 20;
    this.skip = 0;
    this.reset();
  }

  reset() {
    this.products = [];
    this.getProducts();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.getMoreProducts();
    }
  }

}
