import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Worker } from '../worker';
import { WorkerService } from '../worker.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit {


  workers: Observable<Worker[]>;

  constructor(
    private service: WorkerService, 
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.workers = this.route.paramMap.pipe(
        switchMap(params => {
          parseInt(params.get('id'));
          return this.service.getWorkers();
        })
      )
    }
  
}

