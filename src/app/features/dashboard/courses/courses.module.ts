import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '../../../shared/shared/shared.module';
import { DialogCoursesComponent } from './dialog-courses/dialog-courses.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CoursesComponent } from './courses.component';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    DialogCoursesComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatNativeDateModule
  ],
  exports:[CoursesComponent,DialogCoursesComponent]
})
export class CoursesModule { }
