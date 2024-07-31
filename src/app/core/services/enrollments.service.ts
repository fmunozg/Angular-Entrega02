import { Injectable } from '@angular/core';
import { enroll } from '../../features/dashboard/enrollments/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {

  constructor() { }

  dataEnroll: enroll[] = [
    { id: 1, student: 'Felipe Muñoz', course: 'Angular' },
    { id: 2, student: 'Ana Torres', course: 'Python' },
    { id: 3, student: 'Juan Pérez', course: 'React' },
    { id: 4, student: 'Laura López', course: 'Vue' },
    { id: 5, student: 'Carlos Hernández', course: 'Node.js' },
    { id: 6, student: 'Luisa Martínez', course: 'Django' },
    { id: 7, student: 'Pedro Rodríguez', course: 'Java' },
    { id: 8, student: 'María García', course: 'Spring' },
    { id: 9, student: 'Sofía Fernández', course: 'C#' },
    { id: 10, student: 'Diego Ruiz', course: 'ASP.NET' }
  ];
  
  

  getEnrollments(): Observable<enroll[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.dataEnroll);
        observer.complete();
      }, 500);
    });
  }

  deleteEnrollmentByID(id:number){
    if(confirm('Está Seguro?')){
      this.dataEnroll = this.dataEnroll.filter((el)=> el.id != id)
    }
  }
}
