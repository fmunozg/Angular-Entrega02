import { Injectable } from '@angular/core';
import { course } from '../../features/dashboard/courses/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  dataCourse: course[] = [
    { id: 1, nombreCurso: 'Angular', startDate: new Date(2023, 6, 1), endDate: new Date(2023, 9, 30) },
    { id: 2, nombreCurso: 'Python', startDate: new Date(2023, 6, 15), endDate: new Date(2023, 10, 15) },
    { id: 3, nombreCurso: 'React', startDate: new Date(2023, 7, 1), endDate: new Date(2023, 9, 31) },
    { id: 4, nombreCurso: 'Vue', startDate: new Date(2023, 7, 15), endDate: new Date(2023, 10, 15) },
    { id: 5, nombreCurso: 'Node.js', startDate: new Date(2023, 8, 1), endDate: new Date(2023, 10, 30) },
    { id: 6, nombreCurso: 'Django', startDate: new Date(2023, 8, 15), endDate: new Date(2023, 11, 15) },
    { id: 7, nombreCurso: 'Java', startDate: new Date(2023, 9, 1), endDate: new Date(2024, 0, 31) },
    { id: 8, nombreCurso: 'Spring', startDate: new Date(2023, 9, 15), endDate: new Date(2024, 1, 15) },
    { id: 9, nombreCurso: 'C#', startDate: new Date(2023, 10, 1), endDate: new Date(2024, 1, 29) },
    { id: 10, nombreCurso: 'ASP.NET', startDate: new Date(2023, 10, 15), endDate: new Date(2024, 2, 15) }
  ];

  getCourses(): Observable<course[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.dataCourse);
        observer.complete();
      }, 500);
    });
  }

  deleteCourseByID(id:number){
    if(confirm('Está Seguro?')){
      this.dataCourse = this.dataCourse.filter((el)=> el.id != id)
    }
  }
}
