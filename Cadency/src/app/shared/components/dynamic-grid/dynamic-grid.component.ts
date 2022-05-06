import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GeneralService } from '@app/shared/services/general.service';
import { Table } from 'primeng/table';
import * as FileSaver from 'file-saver';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-dynamic-grid',
  templateUrl: './dynamic-grid.component.html',
  styleUrls: ['./dynamic-grid.component.scss']
})
export class DynamicGridComponent implements OnInit {
  @ViewChild('table') table: Table;
 
  getData: any[] = [];
  gridcols: any[] = [];
 

  @Input() data;
 
  constructor(
     public generalService: GeneralService
  ) { }

  ngOnInit(): void {
    this.getGridApiData();
  }

  ngOnChanges($event){
    this.data = this.data;
   
  }

  getGridApiData(){
  
      this.generalService.getProductsSmall().subscribe((res: any)=>{
          if(res.data){
           
            this.getData = res.data || [];
            console.log(res.data);
             }
          this.gridcols = res.heading || [];
          console.log(res.heading)
      })
  }





 





}
