import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { EmployeeService } from '../employee.service'
=======
import { EmployeeService } from '../../employee.service'
>>>>>>> services

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

<<<<<<< HEAD
  employeeList;

  constructor(private empServ: EmployeeService) { }

  ngOnInit(): void {
    this.employeeList = this.empServ.employeeDetails;
=======
  employeeDetailsName

  constructor(private employeeList: EmployeeService) { }

  ngOnInit(): void {
    this.employeeDetailsName = this.employeeList.employeeDetails
>>>>>>> services
  }

}
