import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studentList : Student[] = [];
  columnHeaderList : string[] = ["Name","Age"];
  fieldList : string[] = ["name","age"];

  constructor() { }

  ngOnInit() {
    let student1 = new Student(27,'keyur',32);
    let student2 = new Student(26,'denish',32);
    let student3 = new Student(44,'vinit',33);

    this.studentList.push(student1);
    this.studentList.push(student2);
    this.studentList.push(student3);
  }

}
