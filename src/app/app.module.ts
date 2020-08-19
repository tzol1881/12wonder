import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModule } from '../app/home/home.module';
import { TaskModule } from '../app/task/task.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskCountComponent } from './task-count/task-count.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { ClickButtonDirective } from './click-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskCountComponent,
    AddTaskComponent,
    ClickButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    TaskModule,
    MenuModule,
    DialogModule,
    BrowserAnimationsModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
