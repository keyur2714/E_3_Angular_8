import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@InputDemo';
  msg : string = 'Hello Radhe Krishna...!';

  msgList : string[] = [
    "Hello",
    "Hi",
    "How are you?",
    "Good Morning",
    "Good Afternoon",
    "Good Evening",
    "Good Night"
  ];
}
