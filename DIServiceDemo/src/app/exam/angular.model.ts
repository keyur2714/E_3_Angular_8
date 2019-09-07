import { IQuestion } from './iQuestion.model';
import { LoggingService } from '../logging.service';
import { Injectable } from '@angular/core';

@Injectable()
export class Angular extends IQuestion{
    constructor(private loggingService : LoggingService){
        super();
    }
    askQuestion(): string {
        this.loggingService.logInfo("Angular : Ask Question method started.");
        return "What is Angular?";
    }
    
}