import { Teacher } from './teacher';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TEACHERS } from './dummy-data-teachers';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }

  getTeachers():Observable<Teacher[]>{
    return of(TEACHERS);
  }

  getTeacher(id:number | string){
    return this.getTeachers().pipe(
      // + - before `id` - turns a string into a number
      map((teacher:Teacher[]) => teacher.find(s=> s.id === +id)!)
    )
  }
  getTeacherClasses(id:number | string){
    return this.getTeachers().pipe(
      // + - before `id` - turns a string into a number
      map((teacher: Teacher[]) => teacher.find(s => s.id === +id)!.listClass.map((el) => el.name)),
    )
  }
}
