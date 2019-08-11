import { Event } from './event.model';

export class Registration {
    constructor(public id?:number,public eventType ?: Event,public firstName?:string,public lastName?:string,public email?:string,public mobileNo?:string,public gender?:string){}

    clear():void{
        this.id = 0;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.mobileNo = '';        
    }
}