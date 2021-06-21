import { Observable } from 'rxjs';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  // get one student from the array
  student:Observable<Student>;

  // Get all services and interfaces to work with: 
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service: StudentService
  ) { }

  ngOnInit(): void {
    this.student = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=> 
      this.service.getStudent(params.get('id')))
    )
  }

  goBack(){
    // const sId = student ? student.id : null;
    // this.router.navigate(['/students', { id: sId }]);
    this.router.navigate(['/students']);
  }

}
