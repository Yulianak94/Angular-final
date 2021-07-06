import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {


  employees: Observable<Employee[]>;

  constructor(
    private service: EmployeeService, 
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.employees = this.route.paramMap.pipe(
        switchMap(params => {
          parseInt(params.get('id'));
          return this.service.getEmployees();
        })
      )
    }
  
}

