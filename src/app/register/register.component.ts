import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(
    // private api:HttpClient, => chuyển sang dùng service
    private auth:AuthService,
    private router:Router
  ) {}

  // apiUrl:string = 'http://localhost:3000/register';
  onRegister(data:any):void {
    // this.api.post(this.apiUrl,data).subscribe(res => {
    this.auth.register(data).subscribe(res => {
      alert('Đăng ký thành công');
      this.router.navigate(['/login']);
    })
  }
}
