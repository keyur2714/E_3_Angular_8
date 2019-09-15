import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    isLoggedIn : boolean = true;

    constructor(){}

    athenticate(userName : string,password : string) : boolean{
        if(userName === 'keyur' && password === 'denish'){
            this.isLoggedIn = true;
            return true;
        }
        return false;
    }
    
}