import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; //lấy giá trị params truyền trên url
@Component({
  selector: 'app-edit',
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  constructor(
    private client:HttpClient,
    private router:Router,
    private actRoute:ActivatedRoute
  ) {}

  apiUrl:string = 'http://localhost:3000/students';
  id:number = 0;
  oldStudent:any; //chứa dữ liệu cũ của bản ghi

  ngOnInit():void {
    //cú pháp this.actRoute.snapshot.params['tenParams']
    this.id = this.actRoute.snapshot.params['id']; //lấy giá trị của id trên url gán cho biến id
    this.getDetail(); //gọi hàm lấy thông tin chi tiết bản ghi
  }

  getDetail():void { //lấy thông tin chi tiết bản ghi cũ
    this.client.get(`${this.apiUrl}/${this.id}`).subscribe(res => {
      if(res) {
        this.oldStudent = res; //gán dữ liệu json-server trả về cho biến oldStudent
      }
    })
  }

  onEdit(data:any):void { //cập nhật dữ liệu lên json-server
    this.client.put(`${this.apiUrl}/${this.id}`,data).subscribe(res => {
      if (res) {
        alert('Cập nhật thành công');
        this.router.navigate(['']);
      }
    })
  }
}
