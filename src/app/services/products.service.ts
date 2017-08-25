import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Product } from '../app.component';
import { HttpEventType } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class ProductsService {

  private productsUrl = 'api/products';

  constructor(private http: HttpClient) {
  }

  getProducts(limit: number, skip: number, sort: string): Observable<Product[]> {
    return Observable.create(observer => {

      const requestUrl = this.productsUrl + '?limit=' + limit + '&skip=' + skip + '&sort=' + sort;

      this.http.get(requestUrl, { responseType: 'text' })
        .subscribe(results => {
          const data = results.split('\n');
          if (!data[ data.length - 1 ]) {
            // remove last empty line
            data.pop();
          }
          observer.next(
            // convert text lines to json array
            data.map(function(product) {
              return JSON.parse(product);
            }
          ));
        });
    });
  }

}
