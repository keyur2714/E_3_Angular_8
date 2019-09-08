import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers : [StudentService]
})
export class StudentComponent implements OnInit {

  studentList : Student[] = [];
  names : string[] = [];

  constructor(private studentService : StudentService) { }

  ngOnInit() {
    this.studentService.getStudentList().subscribe(
      (studentList : Student[])=>{
        this.studentList = studentList;
      },
      (error)=>{}
    );
    this.studentService.getStudentNames().subscribe(
      (names)=>{
        this.names = names;
      }
    )
    this.studentService.getFilteredStudentNameList().subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
