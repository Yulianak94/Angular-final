import { Observable } from 'rxjs';
import { Teacher } from './../teacher';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TeacherService } from '../teacher.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {

  // get one student from the array
  teacher: Observable<Teacher>;
  classes:Observable<String[]>

  // Get all services and interfaces to work with: 
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service: TeacherService
  ) {

   }

  ngOnInit(): void {
    this.teacher = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getTeacher(params.get('id')))
    )
  }
  goBack(){
    // const sId = student ? student.id : null;
    // this.router.navigate(['/students', { id: sId }]);
    this.router.navigate(['/teachers']);
  }

}
