import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  employeeList = [
    {id: 1, name: 'Z'},
    {id: 2, name: 'A'},
    {id: 3, name: 'B'},
    {id: 4, name: 'C'},
  ]

  constructor() { }
}
