import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { StudentsListComponent } from './students/students-list/students-list.component';
// ***   import { TeacherComponent } from './teachers/teacher.component';

// import:
import { AppRoutingModule } from './app-routing.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';

import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { WorkersModule } from './workers/workers.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, StudentsModule, TeachersModule, WorkersModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
