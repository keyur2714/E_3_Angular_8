import { Component } from '@angular/core';

@Component({
    selector : 'app-test',
    template : `<h1>Hell From {{title}}</h1>`,
    styles : ['h1{color : red}']
})
export class TestComponent {
    title : string = 'Test Component';
}