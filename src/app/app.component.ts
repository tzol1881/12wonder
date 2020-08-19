import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TwelveWonder';
  display: boolean = false;
  ngOnInit() {
}

  showDialog() {
    this.display = true;
  }

  onDialogClose(event) {
    this.display = event;
  }
}
