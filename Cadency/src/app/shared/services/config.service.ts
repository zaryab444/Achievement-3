import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
     message: any = {};
     clientConfig: any = {};
     constants : any = {};
     private isLoadComplete: Subject<boolean> = new Subject();

  constructor(private http: HttpClient) { }

  /**
   * this will call all config loads and return promise
   */
  
  loadConfigs(): Promise<any>{
    return new Promise((resolve)=>{
      let loadCounts = 0;
      this.loadClientConfig();
      this.isLoadComplete.subscribe(isComplete =>{
        loadCounts ++;
        if(loadCounts === 2) {
          resolve(true);
        }
      });
    });
  }

  /**
   * load client config json
   */
  private loadClientConfig(){

    this.http.get('assets/config/client-config.json').subscribe(res =>{
      this.clientConfig = res;
      this.isLoadComplete.next(true);
    }, (err)=>{
      this.isLoadComplete.next(true);
    }
    )
  }

}
