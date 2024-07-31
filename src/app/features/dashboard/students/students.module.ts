import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { StudentsRoutingModule } from './students-routing.module';
import { DialogStudentsComponent } from './dialog-students/dialog-students.component';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { StudentsComponent } from './students.component';
import { SharedModule } from '../../../shared/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    DialogStudentsComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports:[StudentsComponent]
})
export class StudentsModule { }
