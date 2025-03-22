import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  constructor(private client:HttpClient) {} //khởi tạo các class cần thiết cho component

  ngOnInit():void { //gọi hàm ngay khi component được tải (tương tự useEffect)
    this.getListStudents();
  }

  apiUrl:string = 'http://localhost:3000/students'; //khai báo api URL
  listStudents:any;
  
  getListStudents():void{ //call api để lấy danh sách từ json-server
    //cú pháp: this.client.method(apiUrl).subscribe(response => {})
    this.client.get(this.apiUrl).subscribe(response => {
      this.listStudents = response; //gán dữ liệu trả về(response) cho biến listStudents
    })
  }

  onDelete(id:number):void {
    if (confirm('Bạn có chắc không?')) {
      this.client.delete(`${this.apiUrl}/${id}`).subscribe(response => {
        alert('Xóa thành công');
        this.getListStudents(); //lấy danh sách sinh viên từ json-server
      })
    }
  }
}
