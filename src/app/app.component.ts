import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({ //meta-data
  selector: 'app-root', //tên component để gọi trong trang/component khác
  imports: [RouterOutlet, CommonModule, FormsModule], //danh sách module/package cần sử dụng
  templateUrl: './app.component.html', //đường dẫn đến file html
  styleUrl: './app.component.css' //đường dẫn đến file css
})

export class AppComponent {
  count:number = 0;
  countClick(): number {
    return this.count++;
  }

  name:string = '';

  title = 'thaivm2';
  // listStudents = [
  //   {
  //     maSv: 'PH123456',
  //     ten: 'thaivm2',
  //     nganh: 'Web',
  //     anh: 'https://picsum.photos/200',
  //     namSinh: 1900,
  //     thi: 3
  //   },
  //   {
  //     maSv: 'PH123467',
  //     ten: 'thaivm3',
  //     nganh: 'Marketing',
  //     anh: 'https://picsum.photos/200',
  //     namSinh: 1901,
  //     thi: 5,
  //   },
  //   {
  //     maSv: 'PH123478',
  //     ten: 'thaivm4',
  //     nganh: 'Design',
  //     anh: 'https://picsum.photos/200',
  //     namSinh: 1902,
  //     thi: 10
  //   }
  // ]
}
