import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers : [ProductService]
})
export class ProductListComponent implements OnInit {

  productList : Product[] = [];

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() : void {
    this.productService.getProductList().subscribe(
      (productList : Product[])=>{
        this.productList = productList;
      },(error)=>{

      } 
    )
  }

}
