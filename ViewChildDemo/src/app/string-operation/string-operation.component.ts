import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StringUtilComponent } from '../util/string-util.component';

@Component({
  selector: 'app-string-operation',
  templateUrl: './string-operation.component.html',
  styleUrls: ['./string-operation.component.css']
})
export class StringOperationComponent implements OnInit {

  //result : string = '';

  @ViewChild("str") strElement : ElementRef;

  @ViewChild("result") result : ElementRef;

  @ViewChild(StringUtilComponent)
  stringUtilComponent : StringUtilComponent;

  constructor() { }

  ngOnInit() {
  }

  upperCase():void {
    let str = this.strElement.nativeElement.value;
    let res = this.stringUtilComponent.converetToUpperCase(str);
    this.result.nativeElement.innerHTML='Result is : '+res;
    //this.strElement.nativeElement.value = '';
    this.result.nativeElement.style.color = 'yellow';
    this.result.nativeElement.style.backgroundColor = 'red';
  }

  lowerCase():void {
    let str = this.strElement.nativeElement.value;
    let res = this.stringUtilComponent.converetToLowerCase(str);
    this.result.nativeElement.innerHTML='Result is : '+res;
    //this.strElement.nativeElement.value = '';
    this.result.nativeElement.style.color = 'yellow';
    this.result.nativeElement.style.backgroundColor = 'red';
  }

  reverse():void {
    let str = this.strElement.nativeElement.value;
    let res = this.stringUtilComponent.converetToReverse(str);
    this.result.nativeElement.innerHTML='Result is : '+res;
    //this.strElement.nativeElement.value = '';
    this.result.nativeElement.style.color = 'yellow';
    this.result.nativeElement.style.backgroundColor = 'red';
  }

}
