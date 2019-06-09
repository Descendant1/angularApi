import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './components/employee/employee.component';


const routes: Routes = [
  {path: '' , component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }