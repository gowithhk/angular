import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'ed', component: EmployeeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
