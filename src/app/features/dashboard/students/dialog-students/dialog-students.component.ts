import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { student } from '../models';

@Component({
  selector: 'app-dialog-students',
  templateUrl: './dialog-students.component.html',
  styleUrl: './dialog-students.component.scss'
})
export class DialogStudentsComponent implements OnInit {
  studentForm: FormGroup;
  dialogTitle: string;
  date:any;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogStudentsComponent>,
    @Inject(MAT_DIALOG_DATA) private studentData?: student
  ) {
    this.studentForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      pais: ['', Validators.required]
    });

    this.dialogTitle = this.studentData ? 'Editar Estudiante' : 'Agregar Nuevo Estudiante';

    if(this.studentData){
      this.studentForm.patchValue(this.studentData);
    }

  }
  ngOnInit(): void {
  }
  onSubmit():void {
    this.dialogRef.close(this.studentForm.value)
  }

  onCancel(){
    this.dialogRef.close();
  }
}
