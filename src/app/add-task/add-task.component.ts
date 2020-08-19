import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GetTaskListService } from '../services/get-task-list.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private getTaskListService: GetTaskListService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      taskText: ['', Validators.required],
      creator: [''],
      isGlobal: [[]],
      isLeader: [[]],
      isCompleted: [[]],
      start: [new Date()],
      end: [new Date()]
  });
}

  onClose(){
    this.displayChange.emit(false);
  }

  // Work against memory leak if component is destroyed
  ngOnDestroy() {
    this.displayChange.unsubscribe();
  }

  onSubmit(){
    let task = this.form.getRawValue();
    let record = {};
    record['text'] = task['taskText'];
    record['creator'] = task['creator'];
    record['start'] = this.convertDate(task['start']);
    record['end'] = this.convertDate(task['end']);
    record['isGlobal'] = task['isGlobal'].length === 0 ? false : true;
    record['isLeader'] = task['isLeader'].length === 0 ? false : true;
    record['isCompleted'] = task['isCompleted'].length === 0 ? false : true;
    this.getTaskListService.addTask(record);
    this.form.reset();
    this.onClose();
  }

convertDate(str): string{
  const date = new Date(str);
  const  month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  return [date.getFullYear(), month, day].join('-');
}
}
