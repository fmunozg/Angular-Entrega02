import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { DialogEnrollmentsComponent } from './dialog-enrollments/dialog-enrollments.component';
import { SharedModule } from '../../../shared/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EnrollmentsComponent } from './enrollments.component';


@NgModule({
  declarations: [
    DialogEnrollmentsComponent,
    EnrollmentsComponent
  ],
  imports: [
    CommonModule,
    EnrollmentsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports:[
    EnrollmentsComponent,
    DialogEnrollmentsComponent
  ]
})
export class EnrollmentsModule { }
