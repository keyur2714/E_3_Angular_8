import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserRegistration } from '../user-registration/user-registration.model';

@Component({
  selector: 'app-user-registration-fb',
  templateUrl: './user-registration-fb.component.html',
  styleUrls: ['./user-registration-fb.component.css']
})
export class UserRegistrationFBComponent implements OnInit {

  userRegistrationForm  ;
  isSubmitted : boolean = false;
  userRegistration : UserRegistration = new UserRegistration();

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.createUserRegistrationForm();
  }


  createUserRegistrationForm():void {
    this.userRegistrationForm = this.formBuilder.group({
      name : this.formBuilder.control('',Validators.required),
      userName : this.formBuilder.control('',[Validators.required,Validators.minLength(3)]),
      password : this.formBuilder.control('',[Validators.required,Validators.minLength(6)]),
      gender : this.formBuilder.control('F'),
      email : this.formBuilder.control('',[Validators.required,Validators.email]),
      mobileNo : this.formBuilder.control('',[Validators.required,Validators.minLength(10),Validators.pattern('^[0-9]+$')]),
      hobbies : this.formBuilder.array([this.formBuilder.control('')])
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
    let newControl = this.formBuilder.control('');
    (this.userRegistrationForm.get('hobbies')).push(newControl);
  }

  reset() : void {
    this.userRegistrationForm.reset();
  }

}
