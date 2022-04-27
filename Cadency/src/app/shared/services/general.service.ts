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


getList<T>(){
  return this.http.get<T[]>("/assets/menu.json");
}


}
