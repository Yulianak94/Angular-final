import { Observable } from 'rxjs';
import { Pupil } from './../pupil';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PupilService } from '../pupil.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pupil-detail',
  templateUrl: './pupil-detail.component.html',
  styleUrls: ['./pupil-detail.component.css']
})
export class PupilDetailComponent implements OnInit {

  // get one student from the array
  pupil:Observable<Pupil>;

  // Get all services and interfaces to work with: 
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service: PupilService
  ) { }

  ngOnInit(): void {
    this.pupil = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=> 
      this.service.getPupil(params.get('id')))
    )
  }

  goBack(){
    // const sId = student ? student.id : null;
    // this.router.navigate(['/students', { id: sId }]);
    this.router.navigate(['/pupils']);
  }

}
