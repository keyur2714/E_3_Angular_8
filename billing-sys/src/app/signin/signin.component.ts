import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  userLoginForm;
  errorMessage : string ='';

  constructor(private formBuilder : FormBuilder,private authService : AuthService,private router : Router) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm(): void{
    this.userLoginForm = this.formBuilder.group(
      {
        userName : this.formBuilder.control('',[Validators.required,Validators.minLength(3)]),
        password : this.formBuilder.control('',[Validators.required,Validators.minLength(5)])
      }
    )
  }

  login() : void {
    console.log(this.userLoginForm.value);
    
    if(this.userLoginForm.valid){
      let userName = this.userLoginForm.controls['userName'].value;
      let password = this.userLoginForm.controls['password'].value;
      this.authService.athenticate(userName,password).subscribe(
        (user)=>{
          
          if(user){
            this.authService.isLoggedIn = true;          
            sessionStorage.setItem("token",user.token);
            sessionStorage.setItem("user",JSON.stringify(user));
            this.router.navigate([this.authService.successUrl]);
          }else{
            this.errorMessage = 'Invalid Username or Password.'
          }
          
        },
        (error)=>{

        }
      )
    }
  }
}
