import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  addItem() : void {
    this.router.navigate(['addItem'],{queryParams : {name : 'Mobile',price:10000}});
  }

  edit(id : number ):void {
    this.router.navigate(['editItem',id]);
  }
}
