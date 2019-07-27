import { Component, OnInit, Input } from '@angular/core';
import { Education } from './education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  //education1 : Education = new Education();
  @Input()
  educationList: Education[] = [];

  constructor() { }

  ngOnInit() {
    // this.education1.qulification = 'S.S.E';
    // this.education1.yearOfPassing = '2001';
    // this.education1.university = 'GSEB';
    // this.education1.per = 73;
    let education1 = new Education();
    education1.qulification = 'S.S.E';
    education1.yearOfPassing = '2001';
    education1.university = 'GSEB';
    education1.per = 73;

    let education2 = new Education();
    education2.qulification = 'H.S.E';
    education2.yearOfPassing = '2003';
    education2.university = 'GHSEB';
    education2.per = 66;

    let education3 = new Education();
    education3.qulification = 'B.Tech';
    education3.yearOfPassing = '2007';
    education3.university = 'VNSGU';
    education3.per = 60;

    let education4 = new Education();
    education4.qulification = 'M.Tech';
    education4.yearOfPassing = '2009';
    education4.university = 'SPU';
    education4.per = 65;

    if (this.educationList.length == 0) {
      this.educationList.push(education1);
      this.educationList.push(education2);
      this.educationList.push(education3);
      this.educationList.push(education4);
    }
  }

}
