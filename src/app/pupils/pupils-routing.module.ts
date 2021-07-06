import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PupilDetailComponent } from './pupil-detail/pupil-detail.component';
import { PupilsListComponent } from './pupils-list/pupils-list.component';

const routes: Routes = [
  { path:'pupils', component: PupilsListComponent }, 
  { path:'pupil/:id', component: PupilDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PupilsRoutingModule { }
