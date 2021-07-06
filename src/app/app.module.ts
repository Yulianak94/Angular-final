import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { StudentsListComponent } from './students/students-list/students-list.component';
// ***   import { TeacherComponent } from './teachers/teacher.component';

// import:
import { AppRoutingModule } from './app-routing.module';
import { PupilsModule } from './pupils/pupils.module';
import { TeachersModule } from './teachers/teachers.module';

import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { EmployeesModule } from './employees/employees.module';
import { AvgPipe } from "../pipes/AvgPipe.pipe";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    AvgPipe
    
  ],
  imports: [BrowserModule, AppRoutingModule, PupilsModule, TeachersModule, EmployeesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
