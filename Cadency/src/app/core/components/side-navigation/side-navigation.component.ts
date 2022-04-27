import { Component, OnInit } from '@angular/core';
import { GeneralService } from '@app/shared/services/general.service';
import { Observable } from 'rxjs';
import { IMenu } from '../menu/IMenu';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  visibleSidebar1: any;
  menuList: Observable<IMenu[]>;
  constructor(private generalServie: GeneralService) { }

  ngOnInit(): void {
    this.menuList = this.generalServie.getList<IMenu>("/assets/menu.json")
    console.log(this.menuList);
  }

}
