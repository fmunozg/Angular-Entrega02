import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesService } from '../../../core/services/courses.service';
import { DialogCoursesComponent } from './dialog-courses/dialog-courses.component';
import { course } from './model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  constructor(
    public dialog: MatDialog,
    public courseService:CoursesService
    ) {}

    courses: any;

  ngOnInit(): void {
    this.getCourses();
  }

  displayedColumns: string[] = ['id', 'curso', 'finicio','ftermino','actions'];


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCoursesComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result)
        result['id'] = this.courses.length + 1;
        this.courses = [...this.courses, result]
      }
    });
  }

  deleteCourse(event:any){
    this.courseService.deleteCourseByID(event);
    this.getCourses();
  }

  getCourses(){
    this.courseService.getCourses().subscribe((res: any)=>{
      this.courses = res;
    })
  }

  editCourse(courseData: course){
    this.dialog.open(DialogCoursesComponent,{data: courseData}).afterClosed().subscribe({
      next:(value) => {
        if(!!value){
          this.courses = this.courses.map((el:course)=> el.id === courseData.id ? { ...el, ...value } : el);
        }
      }
    });
  }
}
