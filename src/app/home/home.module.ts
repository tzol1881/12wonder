import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
