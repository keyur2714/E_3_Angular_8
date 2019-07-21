import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-simple-calc',
  templateUrl: './simple-calc.component.html',
  styleUrls: ['./simple-calc.component.css']
})
export class SimpleCalcComponent implements OnInit {

  number1: string = '10';
  number2: string = '0';

  result : number = 0;

  @Output()
  getResult = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  add():void{
    //alert(this.number1+" "+this.number2);
    this.result = parseInt(this.number1) + parseInt(this.number2); 
    this.getResult.emit(this.result);
  }

  sub():void{
    this.result = parseInt(this.number1) - parseInt(this.number2); 
    this.getResult.emit(this.result);
  }

  mul():void{
    this.result = parseInt(this.number1) * parseInt(this.number2); 
    this.getResult.emit(this.result);
  }

  div():void{
    if(parseInt(this.number2) !== 0){
      this.result = parseInt(this.number1) / parseInt(this.number2);       
    }
    this.getResult.emit(this.result);
  }

}
