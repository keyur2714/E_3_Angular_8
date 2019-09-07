import { IQuestion } from './iQuestion.model';

export class BigData extends IQuestion{
    askQuestion() : string{
        return "What is Big Data?";
    }
}