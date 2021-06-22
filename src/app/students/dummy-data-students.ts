import { Student } from './student';
import { Class } from '../Class';


export const STUDENTS: Student[] = [
    { id: 358452159, name: 'Johnny', age: 2, city: 'Ariel', myClass: [{ id: 4, name: 'D1', numStudents: 30, address: 'Ramat HaGolan 65, Ariel', educatorID: 856945237, educatorName: "Hezi" }], grades: [ { type: 'Chemistry', myGrade: 100 }, { type: 'English', myGrade: 95 }, { type: 'Biology', myGrade: 97} ], picture:"https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    { id: 754123695, name: 'Bobby', age: 4, city:'Jerusalem', myClass: [{ id: 2, name:'B1', numStudents: 15, address:'Ramat HaGolan 65, Ariel', educatorID: 357852456, educatorName: "Tomer" }], grades: [{ type :'Bible', myGrade: 60 }, { type:'Physics', myGrade:55 }, {type:'Sport', myGrade:65}], picture:"https://images.pexels.com/photos/2007/animal-dog-pet-cute.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { id: 154236965, name: 'Sanny', age: 7, city:'Tel Aviv', myClass: [{ id: 6, name: 'G1', numStudents: 30, address: 'Ramat HaGolan 65, Ariel', educatorID: 478025369, educatorName: "Igor" }], grades: [{ type: 'Web_Design', myGrade: 100 }, { type:'Computer_Vision', myGrade:75 }, {type:'Economy', myGrade:67}], picture:"https://images.pexels.com/photos/933498/pexels-photo-933498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { id: 874125456, name: 'Jack', age: 3, city:'Petah Tikva', myClass: [{ id: 3, name:'C1', numStudents: 25, address:'Ramat HaGolan 65, Ariel', educatorID: 987654321, educatorName: "David" }], grades: [{ type:'Photoshop_Design', myGrade: 80 }, { type:'English', myGrade:95 }, {type:'Russian', myGrade:74}], picture:"https://images.pexels.com/photos/97082/weimaraner-puppy-dog-snout-97082.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { id: 357951258, name: 'Sky', age: 2, city:'Ramat Gan', myClass: [{ id: 2, name:'B1', numStudents: 15, address:'Ramat HaGolan 65, Ariel', educatorID: 357852456, educatorName: "Tomer" }], grades: [{ type:'Chemistry', myGrade: 100 }, { type:'Physics', myGrade:60 }, {type:'Sport', myGrade:70}], picture:"https://images.pexels.com/photos/1562983/pexels-photo-1562983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { id: 645896125, name: 'Charlie', age: 5, city:'Bnei Brak', myClass: [{ id: 4, name:'D1', numStudents: 30, address:'Ramat HaGolan 65, Ariel', educatorID: 856945237, educatorName: "Hezi" }], grades: [{ type:'Biology', myGrade: 75 }, { type:'Computer_Vision', myGrade:95 }, {type:'Web_Design',myGrade:83}], picture:"https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { id: 258456951, name: 'Luna', age: 4, city:'Eilat', myClass: [{ id: 6, name: 'G1', numStudents: 30, address: 'Ramat HaGolan 65, Ariel', educatorID: 478025369, educatorName: "Igor" }], grades: [{ type:'Chemistry', myGrade: 70 }, { type:'Bible', myGrade:95 }, {type:'Biology' ,myGrade:65}], picture:"https://images.pexels.com/photos/2820134/pexels-photo-2820134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { id: 412365589, name: 'Lucy', age: 6, city:'Haifa', myClass: [{ id: 5, name:'F1', numStudents: 15, address:'Ramat HaGolan 65, Ariel', educatorID: 752156358, educatorName: "Dani" }], grades: [{ type:'Bible', myGrade: 60 }, { type: 'English' ,myGrade:55 }, {type:'Economy', myGrade:62}], picture:"https://images.pexels.com/photos/3714060/pexels-photo-3714060.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { id: 951456357, name: 'Morty', age: 3, city:'Beer Sheva', myClass: [{ id: 1, name: 'A1', numStudents: 20, address: 'Ramat HaGolan 65, Ariel', educatorID: 123456789, educatorName: "Yulia" }], grades: [{ type:'Web_Design', myGrade: 100 }, { type:'English', myGrade:95 }, {type:'Economy', myGrade:97}], picture:"https://images.pexels.com/photos/1870301/pexels-photo-1870301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { id: 519753258, name: 'Cooper', age: 2, city:'Kfar Saba', myClass: [{ id: 3, name:'C1', numStudents: 25, address:'Ramat HaGolan 65, Ariel', educatorID: 987654321, educatorName: "David" }], grades: [{ type:'Photoshop_Design', myGrade : 55 }, { type:'Computer_Vision', myGrade : 60 }, {type:'Russian', myGrade:45}], picture:"https://images.pexels.com/photos/3663082/pexels-photo-3663082.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
]