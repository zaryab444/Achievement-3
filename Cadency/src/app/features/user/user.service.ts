import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '@app/shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(_http: HttpClient) {
    super(_http)
   }

  getAllUser(){
    const url = 'assets/users.json';
    return this.get(url);
  }

  
}
