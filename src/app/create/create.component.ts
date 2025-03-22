import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; //làm việc với form
import { Router } from '@angular/router'; //điều hướng/chuyển trang

@Component({
  selector: 'app-create',
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor (
    private router:Router,
    private client:HttpClient
  ) {}
  apiUrl:string = 'http://localhost:3000/students';
  onCreate(student:any):void { //student là dữ liệu ng dùng nhập vào form
    //call api gửi dữ liệu lên json-server
    this.client.post(this.apiUrl,student).subscribe(res => {
      if (res) {
        alert('Thêm mới thành công');
        this.router.navigate(['']);
      }
    })
  }
}
