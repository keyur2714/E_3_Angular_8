import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appMyStyle]'
})
export class MyStyleDirective implements AfterViewInit{

  constructor(private elementRef : ElementRef) {
    console.log("MyStyle Directive Object Created...!");
   }

  ngAfterViewInit(){
    this.elementRef.nativeElement.innerHTML = 'India is Great...!';
    this.elementRef.nativeElement.style.display = 'block';
  }
}
