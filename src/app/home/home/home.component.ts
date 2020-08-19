import { Component, OnInit } from '@angular/core';
import { GetTaskListService } from '../../services/get-task-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tasks: Observable<any>;
  constructor(private getTaskListService: GetTaskListService) { }
  ngOnInit(): void {
    this.tasks = this.getTaskListService.taskList.pipe();
  }

}
