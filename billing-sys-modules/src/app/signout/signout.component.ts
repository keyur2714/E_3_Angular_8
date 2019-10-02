import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private authService : AuthService,private router: Router) { }

  ngOnInit() {
    this.authService.successUrl = 'home';
    this.authService.isLoggedIn = false;
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    this.router.navigate(['signin']);
  }

}
