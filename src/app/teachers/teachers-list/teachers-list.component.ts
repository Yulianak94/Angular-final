import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {

  teachers: Observable<Teacher[]>;
  selectedId = 0;

  constructor(
    private service: TeacherService, 
    private route: ActivatedRoute) { }

  // paramMap - An Observable that contains a map of the required and optional parameters specific to the route.
  // pipe() - is a function that will chain functions before executing. 
  // params.get() - Retrieves a single value for a parameter.
  ngOnInit(): void {
    this.teachers = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id'));
        return this.service.getTeachers();
      })
    )
  }

}