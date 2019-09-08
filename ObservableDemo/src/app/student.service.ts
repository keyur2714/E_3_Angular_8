import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable, of, from, throwError } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor() { }

  getStudentList() : Observable<Student[]>{
    let student1 = new Student(32,'keyur');
    let student2 = new Student(44,'vinit');
    let student3 = new Student(26,'denish');
        
    return of([student1,student2,student3]);
  }

  getStudentNames() : Observable<string[]> {
    return this.getStudentList().pipe(
      map(students => {
        let names: string [] = [];
        for(let student of students){
          student.name = student.name.toUpperCase();
          names.push(student.name);
        }
        return names;
      })
    );    
  }

  getFilteredStudentNameList() : Observable<any> {
    let names : Observable<any> = from(["keyur","denish","vinit","pinku","sachin","hiren"]);
    return names.pipe(
      filter(name => 
      {          
          return name !== 'denish'
      }),
      map(name => {
        name = name.toUpperCase()
        if(name === 'PINKU'){
          console.log("hi.."+name); 
          throwError('Not a valid friend!');
       }
       return name;
      }),      
      catchError(val => {
        console.log(val);
        return of(`I caught: ${val}`)
      })
    );    
  }
}
