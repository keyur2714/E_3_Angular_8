import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = '@InputDemo';
  msg : string = 'Hello Radhe Krishna...!';

  msgList : string[] = [
    "Hello",
    "Hi",
    "How are you?",
    "Good Morning",
    "Good Afternoon",
    "Good Evening",
    "Good Night"
  ];

  stateList : any[] = [
    {
      id : 11,
      code : 'GJ',
      desc : 'Gujarat'
    },
    {
      id : 12,
      code : 'MH',
      desc : 'Maharashtra'
    },
    {
      id: 13,
      code : 'MP',
      desc : 'Madhya Pradesh'
    }
  ];

  selectedCountry : any; 
  selectedState : any;

  countryList : any[] = [
    {
      id: 1,
      code : 'IND',
      desc : 'India'
    },
    {
      id: 2,
      code : 'UK',
      desc : 'United Kingdom'
    },
    {
      id: 3,
      code : 'US',
      desc : 'United States'
    }
  ];

  ngOnInit(){
    this.selectedCountry = this.countryList[1];
    this.selectedState = this.stateList[0];
  }
}
