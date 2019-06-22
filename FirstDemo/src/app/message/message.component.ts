import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message : string = 'Welcome to World of Angular...!';

  constructor() { 
    console.log("Message Component Object Created...!");
  }

  ngOnInit() {
    console.log("Message Component Inititalized...!");
  }

}
