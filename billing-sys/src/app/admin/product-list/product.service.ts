import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

    appUrl : string = 'http://localhost:3000/products';

    constructor(private httpClient : HttpClient){}

    getProductList() : Observable<Product[]>{
        return this.httpClient.get<Product[]>(this.appUrl);
    }
}