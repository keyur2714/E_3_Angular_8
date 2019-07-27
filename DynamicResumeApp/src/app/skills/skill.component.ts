import { Component, OnInit, Input } from '@angular/core';
import { Skill } from './skill.model';
@Component({
    selector : 'app-skills',
    templateUrl : './skill.component.html'    
})
export class SkillComponent implements OnInit{

    @Input()
    skillList : Skill[] = [];

    ngOnInit(): void {
        let skill1 = new Skill();
        skill1.skill = 'Language';
        skill1.skillSet = ["C","C++","Java","Java Script"];

        let skill2 = new Skill();
        skill2.skill = 'Operating System';
        skill2.skillSet = ["Windows","Linux","Ubantu"];

        let skill3 = new Skill();
        skill3.skill = 'Database';
        skill3.skillSet = ["Oracle","MySql","Sql Server"];

        if(this.skillList.length === 0){
            this.skillList.push(skill1);
            this.skillList.push(skill2);
            this.skillList.push(skill3);
        }
    }

}