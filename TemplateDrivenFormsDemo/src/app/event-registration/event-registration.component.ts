import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from './event.model';
import { Registration } from './registration.model';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent implements OnInit {

  eventList : Event[] = [];  
  registration : Registration = new Registration();
  isSubmitted : boolean = false;

  constructor() { }

  ngOnInit() {
    let event1 = new Event();
    event1.eventName = 'Cricket Game';
    event1.eventDate = '2019-08-17';
    event1.location = 'surat';
    let event2 = new Event();
    event2.eventName = 'Cultural';
    event2.eventDate = '2019-08-18';
    event2.location = 'pune';
    let event3 = new Event();
    event3.eventName = 'National Event';
    event3.eventDate = '2019-08-15';
    event3.location = 'pune';

    this.eventList.push(event1);
    this.eventList.push(event2);
    this.eventList.push(event3);

    this.registration.eventType = event1;
    this.registration.gender = 'M'; 

  }

  save(frm: NgForm):void{
    console.log(frm);
    if(frm.valid){
      this.isSubmitted = true;
      console.log(frm.value);
      console.log(frm.controls["firstName"].value);
      console.log(frm.controls["firstName"].valid);
      console.log(JSON.stringify(this.registration));
    }    
  }

  reset(frm: NgForm):void {
    frm.reset();
    this.registration.clear();
    this.registration.eventType = this.eventList[0];
    this.registration.gender = 'M'; 
  }
}
