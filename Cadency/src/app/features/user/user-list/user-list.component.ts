import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  getData: any[] = [];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.listUsers();
  }


  listUsers():void{
    this.userService.getAllUser().subscribe((res:any)=>{
      if(res.data){
        this.getData = res.data || [];
        console.log(res);
      }
    })
  }
}
