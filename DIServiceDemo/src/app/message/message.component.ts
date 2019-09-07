import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private loggingService : LoggingService) { 
    this.loggingService.logInfo("Message Component Object Created..!");
  }

  ngOnInit() {
    this.loggingService.logDebug("Message Component Initialized..!");
    this.loggingService.logInfo(this.loggingService.getName());
  }

}
