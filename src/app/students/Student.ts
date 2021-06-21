import { Class } from "../class";
import { Grade } from "../Grade";
import { Person } from "../Person";

export interface Student extends Person {
    myClass: Class[];
    grades: Grade[]; 
}