import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: TaskComponent}
];

@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    CheckboxModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class TaskModule { }
