import { Injectable } from '@angular/core';
import { student } from '../../features/dashboard/students/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  dataStudent: student[] = [
    { id: 1, nombre: 'Felipe', apellido: 'Muñoz', pais: 'Chile' },
    { id: 2, nombre: 'María', apellido: 'González', pais: 'Argentina' },
    { id: 3, nombre: 'Juan', apellido: 'Pérez', pais: 'Perú' },
    { id: 4, nombre: 'Ana', apellido: 'López', pais: 'México' },
    { id: 5, nombre: 'Carlos', apellido: 'Hernández', pais: 'Colombia' },
    { id: 6, nombre: 'Luisa', apellido: 'Martínez', pais: 'Ecuador' },
    { id: 7, nombre: 'Pedro', apellido: 'Rodríguez', pais: 'Bolivia' },
    { id: 8, nombre: 'Marta', apellido: 'García', pais: 'Uruguay' },
    { id: 9, nombre: 'Sofía', apellido: 'Fernández', pais: 'Paraguay' },
    { id: 10, nombre: 'Diego', apellido: 'Ruiz', pais: 'Venezuela' }
  ];
  

  getStudents(): Observable<student[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.dataStudent);
        observer.complete();
      }, 500);
    });
  }

  deleteStudentByID(id:number){
    if(confirm('Está Seguro?')){
      this.dataStudent = this.dataStudent.filter((el)=> el.id != id)
    }
  }
}
