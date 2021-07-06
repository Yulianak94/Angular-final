import { Class } from "../class";
import { Grade } from "../Grade";
import { Human } from "../Human";

export interface Pupil extends Human {
    class: Class[];
    myGrades: Grade[]; 
}