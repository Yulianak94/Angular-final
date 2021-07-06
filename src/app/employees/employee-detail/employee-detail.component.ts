import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './../employee';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  // get one student from the array
  employee: Observable<Employee>;
  classes:Observable<String[]>

  // Get all services and interfaces to work with: 
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service: EmployeeService
  ) {

   }

  ngOnInit(): void {
    this.employee = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getEmployee(params.get('id')))
    )
  }

  goBack(){
    // const sId = student ? student.id : null;
    // this.router.navigate(['/students', { id: sId }]);
    this.router.navigate(['/employee']);
  }

}

