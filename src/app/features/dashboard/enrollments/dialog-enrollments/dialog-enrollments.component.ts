import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { enroll } from '../model';
import { StudentsService } from '../../../../core/services/students.service';
import { CoursesService } from '../../../../core/services/courses.service';

@Component({
  selector: 'app-dialog-enrollments',
  templateUrl: './dialog-enrollments.component.html',
  styleUrl: './dialog-enrollments.component.scss'
})
export class DialogEnrollmentsComponent {
  enrollForm: FormGroup;
  dialogTitle: string;
  date:any;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogEnrollmentsComponent>,
    public studentService: StudentsService,
    public courseService: CoursesService,
    @Inject(MAT_DIALOG_DATA) private enrollData?: enroll
  ) {
    this.enrollForm = this.fb.group({
      student: ['', Validators.required],
      course: ['', Validators.required]
    });

    this.dialogTitle = this.enrollData ? 'Editar Inscripción' : 'Nueva Inscripción';

    if(this.enrollData){
      this.enrollForm.patchValue(this.enrollData);
    }

  }
  students:any;
  courses:any;
  selectedStudent:any
  selectedCourse:any;

  ngOnInit(): void {
    this.getStudents();
    this.getCourses();
  }
  onSubmit():void {
    this.dialogRef.close(this.enrollForm.value)
  }

  onCancel(){
    this.dialogRef.close();
  }

  getStudents(){
    this.studentService.getStudents().subscribe((res)=>{
      this.students = res;
    })
  }

  getCourses(){
    this.courseService.getCourses().subscribe((res: any)=>{
      this.courses = res;
    })
  }
}
