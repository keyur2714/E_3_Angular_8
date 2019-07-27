import { Component, OnInit, Input } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  @Input()
  contact : Contact = new Contact();

  constructor() { }

  ngOnInit() {    
    if(this.contact.mobileNo === ''){
      this.contact.mobileNo = '7387029671';
      this.contact.email = 'keyurjava27@gmail.com';
    }    
  }

}
