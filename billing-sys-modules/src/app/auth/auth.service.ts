import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

    appUrl : string = 'http://localhost:3000/user_details';
    isLoggedIn : boolean = false;
    successUrl : string = 'home';

    constructor(private httpClient : HttpClient){}

    athenticate(userName : string,password : string) : Observable<User>{
        return this.httpClient.get<User[]>(this.appUrl).pipe(
            map(users=>{
                let user = users.find(u=>u.userName === userName && u.password === password);                
                return user;
            })
        );                
    }
    
}