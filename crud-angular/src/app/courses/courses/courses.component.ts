import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import { CoursesService } from '../services/courses.service';
import { Observable, catchError, of} from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) {
    this.courses$ = this.coursesService.findAll()
    .pipe(
      catchError(err => {
        console.log('ocorreu um erro',err);
        return of([]);
      }))
    }
  ngOnInit(): void {

  }



}
