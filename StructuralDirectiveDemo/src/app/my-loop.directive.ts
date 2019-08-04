import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyLoop]'
})
export class MyLoopDirective {

  _index : number;

  constructor(private templateRef: TemplateRef<any>,private viewContainerRef: ViewContainerRef) { }

  @Input('appMyLoop') set myLoop(loopCounter : number){
    for(let i=1;i<=loopCounter;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  @Input() set appMyLoopIndex(idx : number){
    this._index = idx;
    console.log(this._index);
  }
}
