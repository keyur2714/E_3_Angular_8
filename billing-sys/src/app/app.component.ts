import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Billing System';
  isLoggedIn : boolean = false;
  constructor(private authService : AuthService){}

  checkLoggedIn() : void {
    this.isLoggedIn = this.authService.isLoggedIn;
  }
}
