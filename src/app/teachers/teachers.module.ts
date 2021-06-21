import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
// add: StudentsListComponent (we did not create it directly here)
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { FormsModule } from '@angular/forms';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';


@NgModule({
  declarations: [TeachersListComponent, TeacherDetailComponent],
  imports: [
    CommonModule,
    TeachersRoutingModule, FormsModule
  ]
})
export class TeachersModule { }
