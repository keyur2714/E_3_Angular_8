import { Directive,TemplateRef,ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  constructor(private templateRef : TemplateRef<any>,private viewContainerRef:ViewContainerRef) { }

  @Input() set appMyIf(condition:boolean){
    console.log(condition);
    if(condition === false){
      this.viewContainerRef.clear();
    }else{
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }   
  }
}
