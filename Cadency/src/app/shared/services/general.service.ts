import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICustomer } from '@app/features/customer/customer-interface';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }


  getProductsSmall() {
    return this.http.get<any>('assets/products-small.json')
    .toPromise()
    .then(res => <ICustomer[]>res.data)
    .then(data => { return data; });
}


//map the list of dashboard data
  getList<T>(){
    return this.http.get<T[]>("/assets/menu.json");
   }


    // get first menu route
  getFirstChildRoute(menus: Array<any>) {
    if (menus && menus.length > 0) {
      const firsRoute = menus.find(res => menus[0].id === res?.parentId);
      return firsRoute?.routerLink;
    }
    return null;
  }

  onGotoDefaultRoute(){
    
  }

}
