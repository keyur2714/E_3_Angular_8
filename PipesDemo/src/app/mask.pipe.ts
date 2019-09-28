import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, character : string,noOfChar : number): any {
    let newValue: string = value;    
    let noOFMaskChar = newValue.length - noOfChar;    
    let visibleChars = newValue.substring(noOFMaskChar,newValue.length);
    let finalValue = '';
    for(let i=1;i<=noOFMaskChar;i++){
      finalValue = finalValue + character;
    }
    finalValue = finalValue + visibleChars;
    return finalValue;
  }

}
