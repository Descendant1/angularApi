import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employee } from '../../models/employee';

const getAllEmployees: string = 'http://dummy.restapiexample.com/api/v1/employees';
const deleteEmployee: string = 'http://dummy.restapiexample.com/api/v1/update/';
const createEmployee: string = 'http://dummy.restapiexample.com/api/v1/create';
const updateEmployee: string = 'http://dummy.restapiexample.com/api/v1/update/';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(getAllEmployees);
  }

  deleteEmployee(id): void {
    this.http.delete(deleteEmployee + id);
  }
  saveEmployee (employee: Employee) : Observable<Employee> {
    return employee.id > 0 ? this.update(employee)
      : this.insert(employee);
  }
  private insert(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>( createEmployee, {
      name: employee.employee_name,
      salary: employee.employee_salary,
      age: employee.employee_age
    })
  }
  private update(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(updateEmployee + employee.id,
      {
        name: employee.employee_name,
        salary: employee.employee_salary,
        age: employee.employee_age
      })
  }

}
