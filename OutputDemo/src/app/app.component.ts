import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@OutputDemo';

  myMessage : string = 'How Are you?';
  fMessage2 : string = '';
  fMessage3 : string = '';

  finalResult : number = 0;

  getMessage2(response):void{
    this.fMessage2 = response;
  }

  getMessage3(response):void{
    this.fMessage3 = response;
  }

  getCalcResult(result):void{
    this.finalResult = result;
  }
}
