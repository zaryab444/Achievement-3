import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '@app/shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { 

  }

  getAllUser(){
    const url = 'assets/users.json';
    return this.http.get(url);
  }



  
}
