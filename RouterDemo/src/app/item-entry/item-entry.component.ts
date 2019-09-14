import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-entry',
  templateUrl: './item-entry.component.html',
  styleUrls: ['./item-entry.component.css']
})
export class ItemEntryComponent implements OnInit {

  id : number = 0;

  name : string = '';

  price : number = 0;

  constructor(private location : Location,private activatedRoute : ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param)=>{
        this.id = param.id;
      }
    )
    
    this.activatedRoute.paramMap.subscribe(
      (paramMap)=>{
        this.id = parseInt(paramMap.get('id'));
      }
    )

    this.activatedRoute.queryParams.subscribe(
      (queryParam)=>{
        this.name = queryParam.name;
        this.price = parseInt(queryParam.price);
      }
    )

    this.activatedRoute.queryParamMap.subscribe(
      (queryParamMap)=>{
        this.name = queryParamMap.get('name');
        this.price = parseInt(queryParamMap.get('price'));
      }
    )
  }

  back(): void {
    this.location.back();
  }
}
