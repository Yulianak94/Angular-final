import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';

const routes: Routes = [
  { path:'teachers', component: TeachersListComponent }, 
  { path:'teacher/:id', component: TeacherDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
