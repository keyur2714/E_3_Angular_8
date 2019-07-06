import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBindings';

  name = 'keyur';

  student = {
    rollNo : 32,
    name : 'keyur',
    grade : 'Dist'
  };
}
