import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicGridComponent } from './components/dynamic-grid/dynamic-grid.component';
import { GeneralService } from './services/general.service';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [
  
  
    
  
    DynamicGridComponent
  ],
  imports: [
    CommonModule,
    TableModule
  //BrowserAnimationsModule,
 
  ],
  exports: [
    DynamicGridComponent
  ],
  providers:[
    GeneralService
  ]
})
export class SharedModule { }
