import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("========="+req.url);
        console.log("========="+sessionStorage.getItem('token'));
        let token = sessionStorage.getItem('token');
        if(token){
            req = req.clone({
                setHeaders :{Authorization : 'Bearer '+token}
            })
        }
        return next.handle(req).pipe(
            map(res=>{
                console.log(res+" ******* ");
                return res;
            })
        );
    }

    

}