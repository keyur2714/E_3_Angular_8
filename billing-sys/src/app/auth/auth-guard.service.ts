import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user.model';


@Injectable()
export class AuthGuardService implements CanActivate , CanActivateChild{
    

    constructor(private authService : AuthService,private router : Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        console.log(state.url);
        if(this.authService.isLoggedIn){
            return true;
        }
        this.authService.successUrl = state.url;
        this.router.navigate(['signin']);
        return false;        
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        let currentUser : User = JSON.parse(sessionStorage.getItem('user'));
        if(currentUser.userRole === 'user'){
            alert("Sorry but you don't have permission to access this link.");
            return false;
        }
        return true;
    }
    
}