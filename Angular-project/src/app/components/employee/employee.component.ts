import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee/employee.service';
import { ConcatSource } from 'webpack-sources';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  @Output() empSelected :EventEmitter<Employee> =  new EventEmitter();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(emp=>{
      this.employees =  emp;
      
    });
  }


  deleteEmployee(employee:Employee) {
    this.employeeService.deleteEmployee(employee.id);
    this.employees = this.employees.filter(emp=> emp.id != employee.id);
  }
  saveEmployee(employee:Employee) {
    if(employee)
      this.employeeService.saveEmployee(employee).subscribe(i=>{
          if(employee.id == 0){
            debugger;
            console.log(i)
            this.employees.push(new Employee(i.id
                                              ,i.name
                                              ,i.salary
                                              ,i.age
                                              ,i.profile_image));
          }
      });
  }

  onClick(th:Employee){
    this.employees.forEach(element => {
      element.isSelected =  false;
    });
    th.isSelected =  true ;
    this.empSelected.emit(th);

  }
}
