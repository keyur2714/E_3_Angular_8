import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UserRegistration } from './user-registration.model';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userRegistrationForm : FormGroup;
  isSubmitted : boolean = false;
  userRegistration : UserRegistration = new UserRegistration();

  constructor() { }

  ngOnInit() {
    this.createUserRegistrationForm();
  }


  createUserRegistrationForm():void {
    this.userRegistrationForm = new FormGroup({
      name : new FormControl('',Validators.required),
      userName : new FormControl('',[Validators.required,Validators.minLength(3)]),
      password : new FormControl('',[Validators.required,Validators.minLength(6)]),
      gender : new FormControl('F'),
      email : new FormControl('',[Validators.required,Validators.email]),
      mobileNo : new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern('^[0-9]+$')]),
      hobbies : new FormArray([new FormControl()])
    });
  }

  save() : void {
    console.log(this.userRegistrationForm.valid);
    if(this.userRegistrationForm.valid){
      this.isSubmitted = true;
      console.log(this.userRegistrationForm.value);
      this.userRegistration = this.userRegistrationForm.value;
    }    
  }

  addNew():void{
    let newControl = new FormControl();
    (<FormArray>this.userRegistrationForm.get('hobbies')).push(newControl);
  }

  reset() : void {
    this.userRegistrationForm.reset();
  }
}
