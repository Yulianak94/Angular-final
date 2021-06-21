import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
// add: StudentsListComponent (we did not create it directly here)
import { StudentsListComponent } from './students-list/students-list.component';
import { FormsModule } from '@angular/forms';
import { StudentDetailComponent } from './student-detail/student-detail.component';


@NgModule({
  declarations: [StudentsListComponent, StudentDetailComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule, FormsModule
  ]
})
export class StudentsModule { }
