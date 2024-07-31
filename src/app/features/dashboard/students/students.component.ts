import { Component, OnInit } from '@angular/core';
import { student } from './models';
import { MatDialog } from '@angular/material/dialog';
import { DialogStudentsComponent } from './dialog-students/dialog-students.component';
import { StudentsService } from '../../../core/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public studentService: StudentsService
    ) {}

    students: any;

  ngOnInit(): void {
    this.getStudents();
  }

  displayedColumns: string[] = ['id', 'name', 'country','actions'];


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogStudentsComponent, {
      //data: { students: this.students }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result['id'] = this.students.length + 1;
        this.students = [...this.students, result]
      }
    });
  }

  deleteStudent(event:any){
    this.studentService.deleteStudentByID(event);
    this.getStudents();
  }

  getStudents(){
    this.studentService.getStudents().subscribe((res)=>{
      this.students = res;
    })
  }

  editStudent(studentData: student){
    this.dialog.open(DialogStudentsComponent,{data: studentData}).afterClosed().subscribe({
      next:(value) => {
        if(!!value){
          this.students = this.students.map((el:student)=> el.id === studentData.id ? { ...el, ...value } : el);
        }
      }
    });
  }
}
