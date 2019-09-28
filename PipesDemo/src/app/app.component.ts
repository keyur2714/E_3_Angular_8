import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PipesDemo';

  name : string = 'keyur';

  today : Date = new Date();

  numberObservable = interval(1000);

  accountNumber : string = '9898012121';

  employee = {
    name : 'keyur',
    designation : 'It Engineer',
    salary : 10000,
    department : 'Protegent'
  };
}
