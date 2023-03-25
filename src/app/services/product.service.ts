import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // can go in a config file later..the endpoint we are going to call
  private baseUrl = 'http://localhost:8080/api/products';


  // inject the http client..angular has dependency injection capabilities
  // Angular will take care of injecting this into our given service
  constructor(private httpClient: HttpClient) { }
  
  // Return an observable (Product array).  Map the JSON data from Spring Data REST to 
  // Product array
  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

// unwraps the JSON from Spring Data REST _embedded entry and places it inside Product
interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
