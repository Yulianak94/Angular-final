import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { FormsModule } from '@angular/forms';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';


@NgModule({
  declarations: [EmployeesListComponent, EmployeeDetailComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule, FormsModule
  ]
})
export class EmployeesModule { }
