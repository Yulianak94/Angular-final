import { Worker } from './worker';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WORKERS } from './dummy-data-workers';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor() { }

  getWorkers():Observable<Worker[]>{
    return of(WORKERS);
  }

  getWorker(id:number | string){
    return this.getWorkers().pipe(
      // + - before `id` - turns a string into a number
      map((worker:Worker[]) => worker.find(s=> s.id === +id)!)
    )
  }
  getWorkerClasses(id:number | string){
    return this.getWorkers().pipe(
      // + - before `id` - turns a string into a number
      map((worker: Worker[]) => worker.find(s => s.id === +id)!),
    )
  }
}
