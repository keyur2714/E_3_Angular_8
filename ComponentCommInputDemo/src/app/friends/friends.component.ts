import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  fieldList : string[] = ["name"];
  friendNames : any[] = 
  [
    {name: "keyur"},
    {name : "denish"},
    {name : "vinit"},
    {name : "ravi"},
    {name : "hiren"},
    {name : "sandip"}
  ];
  columnHeaderList : string [] = ["Firend Name"];

  constructor() { }

  ngOnInit() {
  }

}
