import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { EmployeeService } from '../employee.service';
=======
import { EmployeeService } from '../../employee.service';
>>>>>>> services

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

<<<<<<< HEAD
  employeeDetails;

  displayedColumns: string[] = ['id', 'name', 'department']

  constructor(private empServ: EmployeeService) { }

  ngOnInit(): void {
    this.employeeDetails = this.empServ.employeeDetails;
=======
  employeeDetails

  constructor(private empServ: EmployeeService) { }//Dependency Injection

  ngOnInit(): void {
    //Instantiated everytime the component is created
    this.employeeDetails = this.empServ.employeeDetails
>>>>>>> services
  }

}
