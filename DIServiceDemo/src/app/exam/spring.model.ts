import { IQuestion } from './iQuestion.model';

export class Spring extends IQuestion{
    askQuestion() : string {
        return "What is Spring?";
    }
}