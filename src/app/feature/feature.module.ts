import { AuthInputComponent } from './components/auth/auth.component';
import { UserInputComponent } from './components/user/user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FeatureRoutingModule } from './feature-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import {
  ButtonModule,
  DataTableModule,
  DialogModule,
  InputTextModule,
  PaginatorModule,
  MessagesModule,
  InputMaskModule,
  AutoCompleteModule,
  TooltipModule,
  TabViewModule,
  PanelModule
} from 'primeng/primeng';

import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule,
    DataTableModule,
    TableModule
  ],
  declarations: [DashboardComponent,
    HomeComponent, RegisterComponent,
    UserInputComponent, AuthInputComponent,
    ProfileComponent, UserDetailsComponent],
  exports: []
})
export class FeatureModule { }
