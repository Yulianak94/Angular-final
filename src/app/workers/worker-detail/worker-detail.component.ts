import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Worker } from './../worker';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { WorkerService } from '../worker.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.css']
})
export class WorkerDetailComponent implements OnInit {

  // get one student from the array
  worker: Observable<Worker>;
  classes:Observable<String[]>

  // Get all services and interfaces to work with: 
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service: WorkerService
  ) {

   }

  ngOnInit(): void {
    this.worker = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getWorker(params.get('id')))
    )
  }

  goBack(){
    // const sId = student ? student.id : null;
    // this.router.navigate(['/students', { id: sId }]);
    this.router.navigate(['/workers']);
  }

}

