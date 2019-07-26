import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  message : string = '';
  friendNames : string[] = ["keyur","denish","vinit"];
  selectedFriend : string = '';

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

  setSelectedFriend(selectedFriend: string):void {
    this.selectedFriend = selectedFriend;
  }

  delete(id:number):void{
    //alert(id);
    let confirmMsg = confirm("Are you sure want to delete?");
    let deletedFrined = this.friendNames[id];
    //alert(confirmMsg);
    if(confirmMsg){
      this.friendNames.splice(id,1);
      this.message = deletedFrined+ ' Friend Deleted successfully...';
    }
  }
}
