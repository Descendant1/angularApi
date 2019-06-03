import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(emp=>{
      this.employees =  emp;
    });
  }

  onClick(th:Employee){
    console.log(th);
    this.employeeService.deleteEmployee(th.id);
    var a = new Employee();
    a.employee_age = 2500;
    a.employee_name = 'AAAAAAAAAAAAAAAAAAAAAAAA';
    a.employee_salary = 12312312;
    console.log(this.employeeService.createEmployee(a));
  }
}
