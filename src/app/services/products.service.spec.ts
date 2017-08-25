import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { ProductsService } from './products.service';
import { Product } from '../app.component';

describe('ProductsService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('expects a service to be defined', inject([ProductsService], (service: ProductsService) => {
      expect(service).toBeDefined();
  }));

  it('expects a GET request and valid response', inject([HttpClient, HttpTestingController, ProductsService],
    (http: HttpClient, httpMock: HttpTestingController, service: ProductsService) => {

      let products: Product[];

      service.getProducts(1, 0, 'id').subscribe(data =>
        products = data
      );

      const req = httpMock.expectOne('api/products?limit=1&skip=0&sort=id');

      expect(req.request.method).toEqual('GET');

      req.flush(
        '{\"id\":\"0-pbkw30\",\"size\":33,\"price\":602,\"face\":\"( .-. )\",\"date\":\"Fri Aug 18 2017 05:24:57 GMT-0500 (CDT)\"}\n' +
        '{\"id\":\"1-5lcuxv\",\"size\":19,\"price\":29,\"face\":\"( .o.)\",\"date\":\"Mon Aug 21 2017 09:33:30 GMT-0500 (CDT)\"}\n' +
        '{\"id\":\"2-wbqa8d\",\"size\":24,\"price\":135,\"face\":\"( `·´ )\",\"date\":\"Wed Aug 09 2017 00:40:14 GMT-0500 (CDT)\"}\n' +
        '{\"id\":\"3-xhx61i\",\"size\":13,\"price\":684,\"face\":\"( ° ͜ ʖ °)\",\"date\":\"Tue Aug 22 2017 01:42:23 GMT-0500 (CDT)\"}\n' +
        '{\"id\":\"4-5v94zo\",\"size\":21,\"price\":338,\"face\":\"( ͡° ͜ʖ ͡°)\",\"date\":\"Wed Aug 16 2017 21:23:18 GMT-0500 (CDT)\"}\n' +
        '{\"id\":\"5-1e2kjj\",\"size\":34,\"price\":712,\"face\":\"( ⚆ _ ⚆ )\",\"date\":\"Mon Aug 14 2017 06:13:02 GMT-0500 (CDT)\"}\n' +
        '{\"id\":\"6-nfknwh\",\"size\":25,\"price\":504,\"face\":\"( ︶︿︶)\",\"date\":\"Tue Aug 22 2017 09:43:10 GMT-0500 (CDT)\"}\n' +
        '{\"id\":\"7-sbrahu\",\"size\":17,\"price\":28,\"face\":\"( ﾟヮﾟ)\",\"date\":\"Sat Aug 19 2017 10:03:26 GMT-0500 (CDT)\"}\n' +
        '{\"id\":\"8-ibj7mf\",\"size\":31,\"price\":690,\"face\":\"(°,,,°)\",\"date\":\"Tue Aug 22 2017 11:45:27 GMT-0500 (CDT)\"}\n' +
        '{\"id\":\"9-g97xyl\",\"size\":20,\"price\":949,\"face\":\"(¬_¬)\",\"date\":\"Fri Aug 11 2017 22:51:46 GMT-0500 (CDT)\"}'
      );

      httpMock.verify();

      expect(products).toBeDefined();
      expect(products.length).toEqual(10);
      expect(products[0].face).toEqual('( .-. )');
      expect(products[9].price).toEqual(949);
  }));

});
