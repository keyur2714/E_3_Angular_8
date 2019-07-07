import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBindings';

  name = 'keyur';

  isCalcGradeEnable : boolean = false;

  
  


  student = {
    rollNo : 32,
    name : 'keyur',
    per : 72,
    age : 32,
    grade : ''
  };

  calcGrade():void {
    if(this.student.per >= 70){
      this.student.grade = 'Distiction';
    }else if(this.student.per >= 60){
      this.student.grade = 'First';
    }else if(this.student.per >= 50){
      this.student.grade = 'Second';
    }else if(this.student.per >= 40){
      this.student.grade = 'PASS';
    }else{
      this.student.grade = 'FAIL';
    }
  }

  checkValidPer():void {
    if(this.student.per < 0 || this.student.per > 100){
      alert("Please Enter Valid Percentage...");
      this.isCalcGradeEnable = false;
    }else{
      this.isCalcGradeEnable = true;
    }
  }
}
