import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { SharedModule } from './../shared/shared.module';
import { FeatureRoutingModule } from './feature-routing.module';


import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FeatureRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class FeatureModule { }
