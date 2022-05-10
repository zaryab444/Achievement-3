import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GeneralService } from '@app/shared/services/general.service';
import { Table } from 'primeng/table';
import * as FileSaver from 'file-saver';
import { saveAs } from 'file-saver';
import { Subject } from 'rxjs';
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
  isFilters: boolean = false;
  fillFilters: any = {};
  filterSearchText$: Subject<any> = new Subject<any>();
  filter$: Subject<any> = new Subject<any>();
  constructor(
     public generalService: GeneralService
  ) { }

  ngOnInit(): void {
    if(!this.generalService.isObjectEmpty(this.generalService.defaultGridEvent.filters)){
      this.fillFilters = this.generalService.defaultGridEvent.filters;
      this.isFilters = !this.generalService.isObjectEmpty(this.generalService.defaultGridEvent.filters)
    }
    this.getGridApiData();
  }

  ngOnChanges($event){
    if (!this.generalService.isObjectEmpty(this.generalService.defaultGridEvent.filters)) {
      this.fillFilters = this.generalService.defaultGridEvent.filters;
      this.isFilters = !this.generalService.isObjectEmpty(this.generalService.defaultGridEvent.filters);
    } else {
      this.fillFilters = {};
      this.isFilters = false;
    }
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

  onStringFilterKeyup(dt, $event, field, type){
    const value = this.generalService.replaceRestrictedCharacters($event.target.value);
    if (($event.inputType === 'deleteByCut' || $event.inputType === 'deleteContentBackward') && field === 'entity_name') {
      if (this.generalService.isObjectEmpty(dt.filters) && value.length === 0) {
        this.generalService.defaultGridEvent.filters = {};
        this.fillFilters = {};
      }
    }
    this.filterSearchText$.next({ dt, value, field, type });
  }

  onQuery($event) {
    this.filter$.next($event);
  }
}
