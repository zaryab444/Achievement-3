import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICustomer } from '@app/features/customer/customer-interface';
import { Subject } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService
    ) { }
  public defaultGridEvent = {
    filters: {},
    sort: {},
    first: 0,
  
  };

  filterInputRegex: string = this.configService.clientConfig?.FILTER_INPUT_REGEX || '^[A-z0-9-_\', ]*$';

  public gridResetDynamic$: Subject<any> = new Subject();
  getProductsSmall() {
    return this.http.get<any>('assets/products-small.json')
    
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

   /**
   * check if object empty
   */
    public isObjectEmpty(obj) {
      return Object.keys(obj).length === 0;
    }

/**
   * this calls to replace restricted characters from
   * filter inputs
   * @param searchTerm contains term to be searched
   * @param regex contains regex to replace restricted strings
   * @returns return filtered out search term
   */
  replaceRestrictedCharacters(searchTerm: string, regex?: string): string{
    searchTerm = searchTerm.trim().replace(/\s\s+/g, ' ');
    regex = regex || this.filterInputRegex;
    const defaultRegex = regex.replace('^[', '[^').replace('*$', '');
    searchTerm = searchTerm.replace(new RegExp(defaultRegex, 'g'), '');
    return searchTerm;

  }


}
