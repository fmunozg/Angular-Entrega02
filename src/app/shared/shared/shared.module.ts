import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../../core/components/header/header.module';
import { FullnamePipe } from '../pipes/fullname.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { HeaderDirective } from '../header.directive';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';




@NgModule({
  declarations: [FullnamePipe,HeaderDirective],
  imports: [
    CommonModule,
  ],
  exports:[
    FullnamePipe,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTableModule,
    HeaderModule,
    MatToolbarModule,
    MatInputModule,
    HeaderDirective,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  
})
export class SharedModule { }
