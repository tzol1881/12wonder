import { Component, OnInit } from '@angular/core';
import { GetTaskListService } from '../../services/get-task-list.service';
import { Subject, Observable } from 'rxjs';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(private getTaskListService: GetTaskListService) { }
  tasks: Observable<any>;
  isPersonal = [
    {label: 'All', value: null},
    {label: 'Personal', value: false},
    {label: 'Other', value: true}
  ];
  isLeader = [
    {label: 'All', value: null},
    {label: 'Leader', value: true},
    {label: 'Other', value: false}
  ];
  ngOnInit(): void {
    this.tasks =  this.getTaskListService.taskList.pipe();
  }
  
  changeTaskStaus(task, event) {
    this.getTaskListService.changeTaskCount(task);
  }
}
