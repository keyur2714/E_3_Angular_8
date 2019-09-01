import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course.model';

@Injectable()
export class CourseService {

    courseAPIUrl : string = 'http://localhost:3000/course_list';

    constructor(private httpClient : HttpClient){        
    }

    getCourseList() : Observable<Course[]>{        
        return this.httpClient.get<Course[]>(this.courseAPIUrl);
    }

    getCourseById(id : number) : Observable<Course>{        
        return this.httpClient.get<Course>(this.courseAPIUrl+"/"+id);
    }

    save(course : Course): Observable<Course> {
        return  this.httpClient.post(this.courseAPIUrl,course);
    } 

    update(course : Course): Observable<Course> {
        return  this.httpClient.put(this.courseAPIUrl+"/"+course.id,course);
    } 

    delete(id : number) : Observable<any> {
        return this.httpClient.delete<any>(this.courseAPIUrl+"/"+id);
    }
}