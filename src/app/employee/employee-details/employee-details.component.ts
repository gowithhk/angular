import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeDetails;

  displayedColumns: string[] = ['id', 'name', 'department']

  constructor(private empServ: EmployeeService) { }

  ngOnInit(): void {
    this.employeeDetails = this.empServ.employeeDetails;
  }

}
