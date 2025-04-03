import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api:HttpClient) { }

  apiUrl:string="http://localhost:3000"; //khai báo apiUrl
  //khai báo hàm đăng ký để call api
  register(data:any): Observable<any> {
    return this.api.post(`${this.apiUrl}/register`, data);
  }

  //khai báo hàm đăng nhập
  login(data:any): Observable<any> {
    return this.api.post(`${this.api}/login`, data);
  }
}
