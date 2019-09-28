import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loopPipe'
})
export class LoopPipePipe implements PipeTransform {

  transform(value: any, counter : number): any {
    let newValue = '';
    for(let i=1;i<=counter;i++){
      newValue = newValue + ' ' + value;
    }
    return newValue;
  }

}
