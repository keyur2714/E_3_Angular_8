import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  firstName : string = 'keyur';
  lastName : string = 'Thakor';
  age : number = 32;
  gender : string = 'Male';
  dateOfBirth : string = '27/12/1986';

  constructor() { }

  ngOnInit() {
  }

}
