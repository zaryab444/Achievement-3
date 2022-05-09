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
  @Input() gridId: number;
  getData: any[] = [];
  gridcols: any[] = [];
  clearGlobalSearch: boolean = false;
  filterColList =['name'];
  @Input() data;
  isFilterShow: boolean = false;
  filteredData: any[] = [];
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

  getEventValue($event:any) :string {
    return $event.target.value;
  } 



 /**
   * reset date input
   * @param dt grid reference
   */
  filterGrid(dt): void {
    // this.options.isFilterShow = !this.options.isFilterShow;
    if (!this.generalService.isObjectEmpty(dt.filters) ||
      !this.generalService.isObjectEmpty(this.generalService.defaultGridEvent.filters)) {
      this.generalService.gridResetDynamic$.next({isReset: false, id: this.gridId});
    }
    this.clearGlobalSearch = true;
   
    this.isFilterShow = !this.isFilterShow;
  }




 /**
   * filter grid records
   * @param $event grid filtered records
   */
  onFilter($event): void {
    this.filteredData = $event.filteredValue;
  }
}
