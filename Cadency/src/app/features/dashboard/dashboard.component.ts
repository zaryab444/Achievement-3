import { Component, OnInit, ViewChild } from '@angular/core';
import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexTitleSubtitle,
    ApexStroke,
    ApexGrid
  } from "ng-apexcharts";
import { PrimeIcons } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Config} from './dashboard';
import { DashboardService } from './dashboard.service';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    stroke: ApexStroke;
    title: ApexTitleSubtitle;
  };
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit { 
  basicData: any;
  basicOptions: any;
  config: Config;
  subscription: Subscription;
  event1: any;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private configService: DashboardService) { }


 ngOnInit(): void {
  this.basicData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July',],
    datasets: [
        {
            label: 'Monthly Customer Boarding ',
            backgroundColor: '#0000CC	',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
    ]
};
  this.config = this.configService.config;
  this.subscription = this.configService.configUpdate$.subscribe(config => {
  this.config = config;
  });

  this.activityLog();
}

 
 activityLog(){
     this.event1 =[
         {   
             status: "Today Activity",
             icon:  PrimeIcons.COG,
             color: "#673AB7",
             user: "user had updated team description",
             date: "15/10/2020 14:00",
          },
         {   
             status: "Yesterday Activity",
             icon: PrimeIcons.CHEVRON_DOWN,
             color:"#FF9800",
             user:"user have some activities on entities",
             date: "15/10/2020 16:15",
         },
         {
             status: "Schedules Activity",
             icon: PrimeIcons.CHECK,
             color:"#607D8B",
             user: "user have some activities on dashboard",
             date: "15/10/2020 16:15",
                              
            }

     ]
 }
  

}
