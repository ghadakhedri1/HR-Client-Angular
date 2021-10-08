import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AllEmployeesComponent } from './components/all-employees/all-employees.component';
import { AddEmployeesComponent } from './components/add-employees/add-employees.component';
import { EditEmployeesComponent } from './components/edit-employees/edit-employees.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AllEmployeesComponent,
    AddEmployeesComponent,
    EditEmployeesComponent,
  ],
  imports: [CommonModule, EmployeeRoutingModule,RouterModule],
})
export class EmployeeModule {}
