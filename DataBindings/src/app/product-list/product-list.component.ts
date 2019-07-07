import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList : Product[] = [];
  
  constructor() { }

  ngOnInit() {
    let product1 = new Product();
    product1.id = 11;
    product1.code = 'TEA';
    product1.desc = 'Ginder Tea';
    product1.unitPrice = 15;
    
    let product2 = new Product();
    product2.id = 22;
    product2.code = 'COFFEE';
    product2.desc = 'Cold Coffee';
    product2.unitPrice = 25;

    let product3 = new Product();
    product3.id = 33;
    product3.code = 'VP';
    product3.desc = 'Veg Puff';
    product3.unitPrice = 15;

    this.productList.push(product1);
    this.productList.push(product2);
    this.productList.push(product3);
  }

}
