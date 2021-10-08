import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { RouterModule } from '@angular/router';
import { AuthentificationComponent } from './pages/authentification/authentification.component';


@NgModule({
  declarations: [
    AuthentificationComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
  ]
})
export class AccountModule { }
