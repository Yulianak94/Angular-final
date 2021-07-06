import { Pupil } from './pupil';
import { Injectable } from '@angular/core';
import {Observable, of,from } from 'rxjs';
import { PUPILS } from './dummy-data-pupils';
import {
  map, reduce} from 'rxjs/operators';
import { Grade } from '../Grade';


@Injectable({
  providedIn: 'root'
})
export class PupilService {

  constructor() { }

  getPupils(): Observable<Pupil[]> {
    return of(PUPILS);
  }

  getPupil(id: number | string) {
    return this.getPupils().pipe(
      // + - before `id` - turns a string into a number
      map((pupil: Pupil[]) => pupil.find(s => s.id === +id)!)
    )
  }

  // getAvg(id: number | string) {
  //   return this.getStudents().pipe(
  //     // + - before `id` - turns a string into a number
  //     map((student: Student[]) => student.find(s => s.grades.forEach(e => { e.myGrade }))))
  // }
        
  // return this.getStudents().forEach((students) => students.forEach((student) => student.grades))
  

}