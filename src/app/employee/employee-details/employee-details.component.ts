import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeDetails

  constructor(private empServ: EmployeeService) { }//Dependency Injection

  ngOnInit(): void {
    //Instantiated everytime the component is created
    this.employeeDetails = this.empServ.employeeDetails
  }

}
