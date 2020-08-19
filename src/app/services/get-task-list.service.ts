import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTaskListService {
mayTaskCount = new BehaviorSubject(0);
teamTaskCount = new BehaviorSubject(0);
taskList = new BehaviorSubject([]);
  constructor(private http: HttpClient) {
    this.getTask().subscribe(data => {
      this.taskList.next(data['tasks']);
      this.getTaskCount(data['tasks']);
    });
  }

  getTask(): Observable<any> {
    return this.http.get('../../assets/tasks.json');
  }

  changeTaskCount(task): void{
    let currentValue = this.taskList.getValue();
    for (let obj in currentValue) {
      if (currentValue[obj].text === task.text) {
        currentValue[obj].isCompleted = !task.isCompleted;
         break;
      }
    }
    const updatedValue = [...currentValue];
    this.taskList.next(updatedValue);
    currentValue = this.taskList.getValue();
    this.getTaskCount(currentValue);
  }

  addTask(task): void{
    let currentValue = this.taskList.getValue();
    const updatedValue = [...currentValue, task];
    this.taskList.next(updatedValue);
    currentValue = this.taskList.getValue();
    this.getTaskCount(currentValue);
  }

  getTaskCount(currentValue): void {
    this.mayTaskCount.next(currentValue.filter((obj) => obj.isGlobal === false && obj.isCompleted === false).length);
    this.teamTaskCount.next(currentValue.filter((obj) => obj.isGlobal === true && obj.isCompleted === false).length);
  }
}
