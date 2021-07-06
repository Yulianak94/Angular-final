import { Employee } from './employee';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EMPLOYEE } from './dummy-data-employees';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees():Observable<Employee[]>{
    return of(EMPLOYEE);
  }

  getEmployee(id:number | string){
    return this.getEmployees().pipe(
      // + - before `id` - turns a string into a number
      map((employee:Employee[]) => employee.find(s=> s.id === +id)!)
    )
  }
  getEmployeeClasses(id:number | string){
    return this.getEmployees().pipe(
      // + - before `id` - turns a string into a number
      map((employee: Employee[]) => employee.find(s => s.id === +id)!),
    )
  }
}
