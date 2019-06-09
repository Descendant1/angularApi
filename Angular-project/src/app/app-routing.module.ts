import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './components/employee/employee.component';
import { UserComponent } from './components/user/user.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'employees',
    component: EmployeeComponent
  },
  {
    path: 'users',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
