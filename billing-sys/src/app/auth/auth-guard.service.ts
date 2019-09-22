import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate{

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
    
}