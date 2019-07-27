import { Contact } from './contact-info/contact.model';
import { Skill } from './skills/skill.model';
import { Education } from './education/education.model';

export class Person {
    public firstName : string;
    public lastName : string;
    public age : number;
    public gender : string;
    public dateOfBirth : string;

    public contact : Contact = new Contact();
    public skillSets : Skill[] = [];
    public eductaionList : Education[] = [];
}