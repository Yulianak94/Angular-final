import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Pupil } from '../pupil';
import { PupilService } from '../pupil.service';
import { ActivatedRoute } from '@angular/router';
import { reduce, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pupils-list',
  templateUrl: './pupils-list.component.html',
  styleUrls: ['./pupils-list.component.css']
})
export class PupilsListComponent implements OnInit {

  pupils: Observable<Pupil[]>;
  selectedId = 0;
  avg;
  constructor(
    private service: PupilService,
    private route: ActivatedRoute) {
      
  }
  // paramMap - An Observable that contains a map of the required and optional parameters specific to the route.
  // pipe() - is a function that will chain functions before executing. 
  // params.get() - Retrieves a single value for a parameter.
  ngOnInit(): any {
    this.pupils = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id'));
        return this.service.getPupils();
      })
    )
    
   this.avg = this.pupils.forEach(items => items.forEach(item => item['avg'] = (item.myGrades.reduce((acc, item) => acc + item.grade,0) / item.myGrades.length)));
    console.log(this.avg)
  }
}