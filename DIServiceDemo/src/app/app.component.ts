import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DIServiceDemo';

  constructor(private loggingService : LoggingService){
    this.loggingService.logInfo("AppComponent Object Created..!");
    this.loggingService.setName('Radhe Krishna...!');
  }

  ngOnInit(){
    this.loggingService.logDebug("AppComponent Initialized..!");
    this.loggingService.logInfo(this.loggingService.getName());
  }

}
