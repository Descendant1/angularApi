import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../models/employee'
import { EmployeeComponent } from '../employee/employee.component';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private empComp: EmployeeComponent) { }

  employee = new Employee(0, '', 0, 0, '');
  


  clear() {
    this.reInitEmployee();
  }


  onSubmit() {
    this.empComp.saveEmployee(this.employee);
    this.reInitEmployee();
  }
  reInitEmployee(){
    this.employee =  new  Employee(0, '', 0, 0, '');
  }

  ngOnInit() {
    this.empComp.empSelected.subscribe(e => {
      this.employee = e;
    })
  }


}
