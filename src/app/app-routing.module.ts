import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CoursesComponent } from './features/dashboard/courses/courses.component';
import { EnrollmentsComponent } from './features/dashboard/enrollments/enrollments.component';
import { StudentsComponent } from './features/dashboard/students/students.component';

const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent,
    children:[
      {
        path:'courses',
        component:CoursesComponent
      },
      {
        path:'enrollments',
        component:EnrollmentsComponent
      },
      {
        path:'students',
        component:StudentsComponent
      }
    ]
  },
  {
    path: '**', // Cualquier ruta que no coincida con las anteriores (basicmanete es un default)
    redirectTo: '/dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
