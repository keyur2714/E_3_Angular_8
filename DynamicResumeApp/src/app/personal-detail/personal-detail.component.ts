import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  @Input()
  firstName : string = 'keyur';
  @Input()
  lastName : string = 'Thakor';
  @Input()
  age : number = 32;
  @Input()
  gender : string = 'Male';
  @Input("birthDate")
  dateOfBirth : string = '27/12/1986';

  constructor() { }

  ngOnInit() {
  }

}
