import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { DashboardRoutingModule } from './dahshboard-routin.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
