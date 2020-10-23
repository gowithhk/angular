import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { EmployeeService } from '../../employee.service'
>>>>>>> services

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  id;
  name;
  dept;

  constructor(private empServ: EmployeeService) { }
>>>>>>> services

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  addEmployee() {
    this.empServ.createEmployee(this.id, this.name, this.dept)
  }

>>>>>>> services
}
