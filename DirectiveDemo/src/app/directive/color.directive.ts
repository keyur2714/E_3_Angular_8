import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
    selector : '[color]'    
})
export class ColorDirective implements AfterViewInit{

    @Input()
    myColor: string = 'red';

    @Input('size')
    fontSize : string = '50px';

    constructor(private elementRef : ElementRef){
        console.log("Directive Object Created...!");
    }

    ngAfterViewInit(){
        console.log(this.elementRef.nativeElement);
        this.elementRef.nativeElement.style.color = this.myColor;
        this.elementRef.nativeElement.style.fontSize = this.fontSize;
    }

    changeColor(color : string,elementRef1 : ElementRef,elementRef2 : ElementRef):void{
        elementRef1.nativeElement.style.color = color;
        elementRef2.nativeElement.style.color = color;
    }
}