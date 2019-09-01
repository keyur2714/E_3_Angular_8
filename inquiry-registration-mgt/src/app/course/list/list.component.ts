import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  newCourse : Course = new Course();
  courseList : Course[] = [];
  message : string = '';
  isUpdate : boolean = false;

  constructor(private courseService : CourseService) { }

  ngOnInit() {
    this.getCourseList();
  }

  getCourseList() : void {
    this.courseService.getCourseList().subscribe(
      (data : Course[])=>{
        this.courseList = data;
      },
      ()=>{

      }
    )
  }

  save(frm : NgForm) : void {
    if(frm.valid && this.isUpdate == false) {
      this.courseService.save(this.newCourse).subscribe(
        (data : Course)=>{
          this.message = 'Course with Id '+data.id +" Saved Successfully.";
          this.getCourseList();
        },
        ()=>{

        }
      )
    }
    if(frm.valid && this.isUpdate) {
      this.courseService.update(this.newCourse).subscribe(
        (data : Course)=>{
          this.message = 'Course with Id '+data.id +" Updated Successfully.";
          this.getCourseList();
          this.isUpdate = false;
        },
        ()=>{

        }
      )
    }
  }

  edit(id) : void {
    this.courseService.getCourseById(id).subscribe(
      (data : Course) => {
        this.newCourse = data;
        this.isUpdate = true;
      },
      ()=>{

      }
    )
  }

  delete(id) : void {
    let confrmMsg = confirm("Are you sure want to delete ?");
    if(confrmMsg){
      this.courseService.delete(id).subscribe(
        (data)=>{
          this.message = 'Course with Id '+id +" Deleted Successfully.";
          this.getCourseList();
        }
      )
    }
  }
}
