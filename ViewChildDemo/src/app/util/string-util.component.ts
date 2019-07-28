import { Component } from '@angular/core';

@Component({
    selector : 'app-string-util',
    template : '',
    styles : ['']
})
export class StringUtilComponent {

    constructor(){
        console.log("String Util Component Object Created...!");
    }

    converetToUpperCase(str : string):string{
        return str.toUpperCase();
    }    

    converetToLowerCase(str : string):string{
        return str.toLowerCase();
    }

    converetToReverse(str : string):string{
        let revStr = str.split('').reverse().join('');
        return revStr.toString();
    }

}