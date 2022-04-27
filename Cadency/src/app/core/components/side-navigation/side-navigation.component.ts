import { Component, OnInit } from '@angular/core';
import { GeneralService } from '@app/shared/services/general.service';
import { Observable, switchMap } from 'rxjs';
import { IMenu } from '../menu/IMenu';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  visibleSidebar1: any;
  menuList: Observable<IMenu[]>;
  getdata : [];
  constructor(private generalServie: GeneralService) { }

  ngOnInit(): void {

  
 
    this.getDashboardData();
  
  }


  getDashboardData(){
    this.menuList = this.generalServie.getList<IMenu>();
  }

}
