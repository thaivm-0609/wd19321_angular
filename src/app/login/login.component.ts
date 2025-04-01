import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private api:HttpClient,
    private router:Router
  ) {}

  apiUrl:string='http://localhost:3000/login';
  
  onLogin(data:any):void {
    this.api.post<any>(this.apiUrl,data).subscribe(res => {
      const token = res?.accessToken;
      localStorage.setItem('token', token); //lưu accessToken vào localStorage
      alert('Đăng nhập thành công');
      this.router.navigate(['']); //điều hướng ng dùng về trang danh sách
    })
  }
}
