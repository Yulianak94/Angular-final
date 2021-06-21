import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { reduce, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: Observable<Student[]>;
  selectedId = 0;
  avg;
  constructor(
    private service: StudentService,
    private route: ActivatedRoute) {
      
  }
  // paramMap - An Observable that contains a map of the required and optional parameters specific to the route.
  // pipe() - is a function that will chain functions before executing. 
  // params.get() - Retrieves a single value for a parameter.
  ngOnInit(): any {
    this.students = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id'));
        return this.service.getStudents();
      })
    )
    

  }
}