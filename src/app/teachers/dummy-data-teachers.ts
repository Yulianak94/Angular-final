import { Class } from '../Class';
import { Teacher } from './teacher';

export const TEACHERS: Teacher[] = [
    {id: 123456789, name: 'Yulia', city: 'Ariel', age: 30, seniority: 5, subject: [' Chemistry ', ' English '], listClass: [{id: 1, name:'A1', numStudents: 20, address:'Ramat HaGolan 65, Ariel', educatorID: 123456789, educatorName: 'Yulia'}], hoursMonth: 120, hourlyWage: 50 },
    {id: 357852456, name: 'Tomer', city: 'Jerusalem', age: 28, seniority: 3, subject: [' Physics ', ' Sport '], listClass: [{id: 2, name:'B1', numStudents: 15, address:'Ramat HaGolan 65, Ariel', educatorID: 357852456, educatorName: 'Tomer'}], hoursMonth: 70, hourlyWage: 40 },
    {id: 987654321, name: 'David', city: 'Petah Tikva', age: 27, seniority: 2, subject: [' Economy '], listClass: [{id: 3, name:'C1', numStudents: 25, address:'Ramat HaGolan 65, Ariel', educatorID: 987654321, educatorName: 'David'}], hoursMonth: 90, hourlyWage: 30 },
    {id: 856945237, name: 'Hezi', city: 'Bnei Brak', age: 29, seniority: 2, subject: [' Photoshop Design ', ' Russian '], listClass: [{id: 4, name:'D1', numStudents: 30, address:'Ramat HaGolan 65, Ariel', educatorID: 856945237, educatorName: 'Hezi'}], hoursMonth: 150, hourlyWage: 30 },
    {id: 752156358, name: 'Dani', city: 'Ramat Gan', age: 35, seniority: 4, subject: [' Biology ', ' Bible '], listClass: [{id: 5, name:'F1', numStudents: 15, address:'Ramat HaGolan 65, Ariel', educatorID: 752156358, educatorName: 'Dani'}], hoursMonth: 180, hourlyWage: 45 },
    {id: 478025369, name: 'Igor', city: 'Tel Aviv', age: 38, seniority: 1, subject: [' Web Design ', ' Computer Vision '], listClass: [{ id: 6, name: 'G1', numStudents: 30, address: 'Ramat HaGolan 65, Ariel', educatorID: 478025369, educatorName: 'Igor' }], hoursMonth: 200, hourlyWage: 70 },
    
]
