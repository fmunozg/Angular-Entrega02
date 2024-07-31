import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { course } from '../model';

@Component({
  selector: 'app-dialog-courses',
  templateUrl: './dialog-courses.component.html',
  styleUrl: './dialog-courses.component.scss'
})
export class DialogCoursesComponent {
  courseForm: FormGroup;
  dialogTitle: string;
  date:any;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogCoursesComponent>,
    @Inject(MAT_DIALOG_DATA) private coursesData?: course
  ) {
    this.courseForm = this.fb.group({
      nombreCurso: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });

    this.dialogTitle = this.coursesData ? 'Editar Curso' : 'Agregar Nuevo Curso';

    if(this.coursesData){
      this.courseForm.patchValue(this.coursesData);
    }

  }
  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  ngOnInit(): void {
  }
  onSubmit():void {
    this.dialogRef.close(this.courseForm.value)
  }

  onCancel(){
    this.dialogRef.close();
  }
}
