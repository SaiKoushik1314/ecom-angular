import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/product.model';
import {HttpClient, HttpResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }


  getAllProducts() : Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:8087/v1/digital/get-products")
  }
}
