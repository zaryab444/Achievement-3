import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';
import { DashboardService } from '@feature/dashboard/dashboard.service';
import {TableModule} from 'primeng/table';
import {TimelineModule} from 'primeng/timeline';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    ChartModule,
    TableModule,
    TimelineModule
    
  ],
  providers:[
    DashboardService
  ]
})
export class DashboardModule { }
