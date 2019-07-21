import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  message : string = 'Hello World...!';

  @Input("messageType")
  msgTyp : string = 'info';

  @Output()
  getFormattedMessage = new EventEmitter<string>();

  constructor() {
    console.log("Message Component Object Created...")
  }

  ngOnInit() {    
    this.getFormattedMessage.emit("Formatted: "+this.message);
  }

}
