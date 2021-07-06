import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PupilsRoutingModule } from './pupils-routing.module';
// add: StudentsListComponent (we did not create it directly here)
import { PupilsListComponent } from './pupils-list/pupils-list.component';
import { FormsModule } from '@angular/forms';
import { PupilDetailComponent } from './pupil-detail/pupil-detail.component';


@NgModule({
  declarations: [PupilsListComponent, PupilDetailComponent],
  imports: [
    CommonModule,
    PupilsRoutingModule, FormsModule
  ]
})
export class PupilsModule { }
