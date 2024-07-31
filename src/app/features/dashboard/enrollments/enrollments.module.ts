import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { DialogEnrollmentsComponent } from './dialog-enrollments/dialog-enrollments.component';
import { SharedModule } from '../../../shared/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DialogEnrollmentsComponent
  ],
  imports: [
    CommonModule,
    EnrollmentsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class EnrollmentsModule { }
