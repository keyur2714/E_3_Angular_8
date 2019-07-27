import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';
import { Contact } from './contact-info/contact.model';
import { Skill } from './skills/skill.model';
import { Education } from './education/education.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  selectedPerson : Person = new Person();
  title = 'My Resume';

  personList : Person[] = [];

  constructor(){}

  ngOnInit(){

    let person1 = new Person();
    person1.firstName = 'keyur';
    person1.lastName = 'thakor';
    person1.age = 32;
    person1.gender = 'male';
    person1.dateOfBirth = '27/12/1986';

    let contact1 = new Contact();
    contact1.mobileNo = '7387029761';
    contact1.email = 'keyurjava27@gmail.com';    
    
    person1.contact = contact1;

    let skill1 = new Skill();
    skill1.skill = 'Language';
    skill1.skillSet = ["C","C++","JAVA","Angular"];
    
    let skill2 = new Skill();
    skill2.skill = 'Database';
    skill2.skillSet = ["MySql","Oracle"];

    let skill3 = new Skill();
    skill3.skill = 'OS';
    skill3.skillSet = ["Windows","Linux"];

    let skill4 = new Skill();
    skill4.skill = 'Tools';
    skill4.skillSet = ["Eclipse","MS Office","VS Code"];

    person1.skillSets.push(skill1);
    person1.skillSets.push(skill2);
    person1.skillSets.push(skill3);
    person1.skillSets.push(skill4);

    let education1 = new Education();
    education1.qulification = '10th';
    education1.per = 72.14;
    education1.university = 'GSSE';
    education1.yearOfPassing = '2002';

    let education2 = new Education();
    education2.qulification = '12th';
    education2.per = 66.50;
    education2.university = 'GHSC';
    education2.yearOfPassing = '2004';

    let education3 = new Education();
    education3.qulification = 'B-Tech';
    education3.per = 65.00;
    education3.university = 'SP Uni.';
    education3.yearOfPassing = '2008';

    person1.eductaionList.push(education1);
    person1.eductaionList.push(education2);
    person1.eductaionList.push(education3);    

    

    let person2 = new Person();
    person2.firstName = 'denish';
    person2.lastName = 'patel';
    person2.age = 32;
    person2.gender = 'male';
    person2.dateOfBirth = '27/12/1986';

    let contact2 = new Contact();
    contact2.mobileNo = '7387029777';
    contact2.email = 'denishjava27@gmail.com';    
    
    person2.contact = contact2;

    let skill21 = new Skill();
    skill21.skill = 'Language';
    skill21.skillSet = ["C","C++","JAVA","Angular"];
    
    let skill31 = new Skill();
    skill31.skill = 'Database';
    skill31.skillSet = ["MySql","Oracle"];

    let skill41 = new Skill();
    skill41.skill = 'OS';
    skill41.skillSet = ["Windows","Linux"];

    let skill51 = new Skill();
    skill51.skill = 'Tools';
    skill51.skillSet = ["Eclipse","MS Office","VS Code"];

    person2.skillSets.push(skill21);
    person2.skillSets.push(skill31);
    person2.skillSets.push(skill41);
    person2.skillSets.push(skill51);

    let education21 = new Education();
    education21.qulification = '10th';
    education21.per = 72.14;
    education21.university = 'GSSE';
    education21.yearOfPassing = '2002';

    let education22 = new Education();
    education22.qulification = '12th';
    education22.per = 66.50;
    education22.university = 'GHSC';
    education22.yearOfPassing = '2004';

    let education33 = new Education();
    education33.qulification = 'B-Tech';
    education33.per = 65.00;
    education33.university = 'SP Uni.';
    education33.yearOfPassing = '2008';

    person2.eductaionList.push(education21);
    person2.eductaionList.push(education22);
    person2.eductaionList.push(education33);
    
    this.personList.push(person1);
    this.personList.push(person2);

    this.selectedPerson = this.personList[1];
  }
  
}
