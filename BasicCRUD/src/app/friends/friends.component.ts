import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  message : string = '';
  friendNames : string[] = ["keyur","denish","vinit"];

  constructor() { }

  ngOnInit() {
    this.friendNames.push("ravi");
    this.friendNames.push("hiren");
  }

  addNewFriend(name : string):void{
    //alert("Hello Friends...!"+ name);
    let idx = this.friendNames.indexOf(name);
    if(idx === -1){
      this.message = '';
      this.friendNames.push(name);
    }else{
      this.message = name+' Already Exists.';
    }
  }
}
