import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from '../../../core/services/students.service';
import { EnrollmentsService } from '../../../core/services/enrollments.service';
import { CoursesService } from '../../../core/services/courses.service';
import { DialogEnrollmentsComponent } from './dialog-enrollments/dialog-enrollments.component';
import { enroll } from './model';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss'
})
export class EnrollmentsComponent {
  constructor(
    public dialog: MatDialog,
    public studentService: StudentsService,
    public enrollService: EnrollmentsService,
    public courseService: CoursesService
    ) {}

    students: any;
    courses: any;
    enrollData: any;

  ngOnInit(): void {
    this.enrollData = this.enrollService.getEnrollments();
    console.log(this.enrollData)
  }

  displayedColumns: string[] = ['id', 'student', 'course','actions'];


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogEnrollmentsComponent, {
      //data: { students: this.students }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result['id'] = this.enrollData.length + 1;
        this.enrollData = [...this.enrollData, result]
      }
    });
  }

  deleteEnroll(event:any){
    this.enrollService.deleteEnrollmentByID(event);
    //this.getStudents();
  }

  editEnroll(enrollData:enroll){
    this.dialog.open(DialogEnrollmentsComponent,{data: enrollData}).afterClosed().subscribe({
      next:(value) => {
        if(!!value){
          this.students = this.students.map((el:enroll)=> el.id === enrollData.id ? { ...el, ...value } : el);
        }
      }
    });
  }
}
