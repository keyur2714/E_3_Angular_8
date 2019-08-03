import { Component, ViewChild, ElementRef } from '@angular/core';
import { ColorDirective } from './directive/color.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectiveDemo';

  selectedColor : string = 'green';
  
  @ViewChild(ColorDirective)
  colorDirective : ColorDirective;

  @ViewChild("e1")
  e1 : ElementRef;

  @ViewChild("e2")
  e2 : ElementRef;

  changeColor():void{
    alert(this.selectedColor);
    this.colorDirective.changeColor(this.selectedColor,this.e1,this.e2);
  }


}
