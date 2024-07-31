import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { enroll } from '../model';

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
    @Inject(MAT_DIALOG_DATA) private enrollData?: enroll
  ) {
    this.enrollForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      pais: ['', Validators.required]
    });

    this.dialogTitle = this.enrollData ? 'Editar Inscripción' : 'Nueva Inscripción';

    if(this.enrollData){
      this.enrollForm.patchValue(this.enrollData);
    }

  }
  ngOnInit(): void {
  }
  onSubmit():void {
    this.dialogRef.close(this.enrollForm.value)
  }

  onCancel(){
    this.dialogRef.close();
  }
}
