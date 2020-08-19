import { Component, OnInit } from '@angular/core';
import { GetTaskListService } from '../services/get-task-list.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-task-count',
  templateUrl: './task-count.component.html',
  styleUrls: ['./task-count.component.scss']
})
export class TaskCountComponent implements OnInit {
myTask: Observable<number>;
teamTask: Observable<number>;
  constructor(private getTaskListService: GetTaskListService) { }

  ngOnInit(): void {
    this.myTask = this.getTaskListService.mayTaskCount.pipe();
    this.teamTask = this.getTaskListService.teamTaskCount.pipe();
  }

}
