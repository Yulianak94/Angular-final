import { Student } from './student';
import { Injectable } from '@angular/core';
import {Observable, of,from } from 'rxjs';
import { STUDENTS } from './dummy-data-students';
import {
  map, reduce} from 'rxjs/operators';
import { Grade } from '../Grade';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(): Observable<Student[]> {
    return of(STUDENTS);
  }

  getStudent(id: number | string) {
    return this.getStudents().pipe(
      // + - before `id` - turns a string into a number
      map((student: Student[]) => student.find(s => s.id === +id)!)
    )
  }

  // getAvg(id: number | string) {
  //   return this.getStudents().pipe(
  //     // + - before `id` - turns a string into a number
  //     map((student: Student[]) => student.find(s => s.grades.forEach(e => { e.myGrade }))))
  // }
        
  // return this.getStudents().forEach((students) => students.forEach((student) => student.grades))
  

}