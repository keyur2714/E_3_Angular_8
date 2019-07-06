import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friendName : string = '';

  friendNames : string[] = ["keyur","denish","vinit"];

  isUpdate : boolean = false;
  updateIdx : number = 0;

  constructor() { }

  ngOnInit() {
    this.friendNames.push("Ankit");
  }

  add():void {    
    if(this.friendName === ''){
      alert("Please Enter Name!");
    }else if(this.friendNames.indexOf(this.friendName) !== -1){
      alert("Name is already Exists!");
    }else{
      this.friendNames.push(this.friendName);
      this.friendName = '';
      alert("Added Successfull...!");
    }
  }

  update():void {            
    if(this.friendName === ''){
      alert("Please Enter Name!");
    }else{
      this.friendNames[this.updateIdx] = this.friendName;
      this.friendName = '';
      this.updateIdx = 0;
      this.isUpdate = false;
      alert("Update Successfull...!");
    }
  }

  edit(idx : number):void {
    this.isUpdate = true;
    this.updateIdx = idx;
    this.friendName = this.friendNames[idx];    
  }

  delete(idx : number):void {
    let confirmMsg = confirm("Are you sure want to delete?");
    if(confirmMsg){
      let deletedName = this.friendNames[idx];
      this.friendNames.splice(idx,1);
      alert(deletedName+ " Deleted Successfull...!");
    }    
  }
}
