import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkersRoutingModule } from './workers-routing.module';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { FormsModule } from '@angular/forms';
import { WorkerDetailComponent } from './worker-detail/worker-detail.component';


@NgModule({
  declarations: [WorkersListComponent, WorkerDetailComponent],
  imports: [
    CommonModule,
    WorkersRoutingModule, FormsModule
  ]
})
export class WorkersModule { }
