import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service'

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  id;
  name;
  dept;

  constructor(private empServ: EmployeeService) { }

  ngOnInit(): void {
  }

  addEmployee() {
    this.empServ.createEmployee(this.id, this.name, this.dept)
  }

}
