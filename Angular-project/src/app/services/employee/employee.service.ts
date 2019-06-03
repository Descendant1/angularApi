import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Employee} from '../../models/employee';

const getAllEmployees: string = 'http://dummy.restapiexample.com/api/v1/employees';
const deleteEmployee: string  = 'http://dummy.restapiexample.com/api/v1/update/';
const createEmployee:string   = 'http://dummy.restapiexample.com/api/v1/create';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> 
  {
    return this.http.get<Employee[]>(getAllEmployees);
  }

  deleteEmployee(id): void 
  {
    this.http.delete(deleteEmployee + id);
  }
  createEmployee(empl:Employee)
  {
    var temp = {
                'name'  : '' ,
                'salary': 0 ,
                'age'   : 0
              }
    temp.name   =  empl.employee_name;
    temp.age    =  empl.employee_age;
    temp.salary =  empl.employee_salary;
    return this.http.post(createEmployee, temp);
  }

}
