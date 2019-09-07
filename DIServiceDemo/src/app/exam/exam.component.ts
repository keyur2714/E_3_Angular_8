import { Component, OnInit } from '@angular/core';
import { Angular } from './angular.model';
import { IQuestion } from './iQuestion.model';
import { Spring } from './spring.model';
import { BigData } from './bigdata.model';
import { LoggingService } from '../logging.service';

const jString = {provide : IQuestion , useClass : Angular};

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  providers: [
    jString,
    LoggingService
  ]
})
export class ExamComponent implements OnInit {

  question : string = '';

  constructor(private iQuestion : IQuestion,private loggingService : LoggingService) { }

  ngOnInit() {
    this.loggingService.logDebug("Inside ExamComponent...!");
    this.question = this.iQuestion.askQuestion();
    this.loggingService.logInfo(this.loggingService.getName());
  }

}
