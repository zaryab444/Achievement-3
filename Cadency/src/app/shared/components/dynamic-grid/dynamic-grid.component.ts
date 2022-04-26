import { Component, OnInit, ViewChild } from '@angular/core';
import { GeneralService } from '@app/shared/services/general.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-dynamic-grid',
  templateUrl: './dynamic-grid.component.html',
  styleUrls: ['./dynamic-grid.component.scss']
})
export class DynamicGridComponent implements OnInit {
  @ViewChild('table') table: Table;
 
  getData: any[] = [];
 
  constructor(
     public generalService: GeneralService
  ) { }

  ngOnInit(): void {
    this.getGridApiData();
  }

  getGridApiData(){
      this.generalService.getProductsSmall().then((res: any)=>{
          if(res){
           
            this.getData = res || [];
            console.log(res);
          }
      })
  }

}
