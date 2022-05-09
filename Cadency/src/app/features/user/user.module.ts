import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import {CardModule} from 'primeng/card';
import { UserService } from './user.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
  
    UserListComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CardModule,
    FlexLayoutModule 
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
