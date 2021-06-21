import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkerDetailComponent } from './worker-detail/worker-detail.component';
import { WorkersListComponent } from './workers-list/workers-list.component';

const routes: Routes = [
  { path:'workers', component: WorkersListComponent }, 
  { path:'worker/:id', component: WorkerDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkersRoutingModule { }
