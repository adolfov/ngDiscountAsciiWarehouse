import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Product } from '../../app.component';

@Injectable()
export class ProductsService {

  private productsUrl = 'api/products';

  constructor(private http: Http) {
  }

  getProducts(limit: number, skip: number, sort: string): Observable<Product[]> {
    const url = `${this.productsUrl}`;
    return this.http
      .get(url)
      .map(response =>
        response.json() as Product[]
      );
  }

}
