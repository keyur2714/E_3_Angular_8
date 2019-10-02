import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product-list/product.model';
import { ProductService } from '../product-list/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productId : number = 0;
  product : Product = new Product();

  constructor(private activatedRoute : ActivatedRoute,private productService : ProductService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (paramMap)=>{
        this.productId = parseInt(paramMap.get('id'));
        this.getProductById(this.productId);
      }
    )
  }

  getProductById(id : number) : void {
    this.productService.getProductById(id).subscribe(
      (product : Product) =>{
        this.product = product;
      }
    )
  }
}
