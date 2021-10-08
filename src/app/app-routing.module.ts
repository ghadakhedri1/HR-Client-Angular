import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  {
    path: 'account',
    loadChildren: () =>
      import('./modules/account/account.module').then(
        (module) => module.AccountModule
      ),
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./modules/employee/employee.module').then(
        (module) => module.EmployeeModule
      ),
  },

  {
    path: 'project',
    loadChildren: () =>
      import('./modules/project/project.module').then(
        (module) => module.ProjectModule
      ),
  },
  {
    path: 'attendance',
    loadChildren: () =>
      import('./modules/attendance/attendance.module').then(
        (module) => module.AttendanceModule
      ),
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./modules/client/client.module').then(
        (module) => module.ClientModule
      ),
  },
  {
    path: 'leave',
    loadChildren: () =>
      import('./modules/leave/leave.module').then(
        (module) => module.LeaveModule
      ),
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
