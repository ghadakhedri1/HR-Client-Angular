import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeesComponent } from './components/add-employees/add-employees.component';
import { AllEmployeesComponent } from './components/all-employees/all-employees.component';
import { EditEmployeesComponent } from './components/edit-employees/edit-employees.component';

const routes: Routes = [
  { path: 'employees', component: AllEmployeesComponent },
  { path: 'add-employee', component: AddEmployeesComponent },
  { path: 'edit-employee', component: EditEmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
