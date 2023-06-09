import { Injectable } from '@angular/core';
import { Course } from '../../model/course';
import {HttpClient} from '@angular/common/http'
import { catchError, delay, first, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly API = '/assetsa/courses.json';

  constructor(private httpClient:HttpClient) {


  }

  findAll(){
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(courses => console.log(courses))
    )


  }
  onError(errorMsg:string){


  }

}
