import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(
    private api:HttpClient,
    private router:Router
  ) {}

  apiUrl:string = 'http://localhost:3000/register';
  onRegister(data:any):void {
    this.api.post(this.apiUrl,data).subscribe(res => {
      alert('Đăng ký thành công');
      this.router.navigate(['/login']);
    })
  }
}
