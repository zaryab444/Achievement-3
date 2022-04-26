import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import {CardModule} from 'primeng/card';
import { UserService } from './user.service';

@NgModule({
  declarations: [
  
    UserListComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CardModule
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
