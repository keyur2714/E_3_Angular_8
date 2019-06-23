import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  contact : Contact = new Contact();

  constructor() { }

  ngOnInit() {    
    this.contact.mobileNo = '7387029671';
    this.contact.email = 'keyurjava27@gmail.com';
  }

}
