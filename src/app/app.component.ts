import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'thaivm2';
  listStudents = [
    {
      maSv: 'PH123456',
      ten: 'thaivm2',
      nganh: 'Web',
      anh: 'https://picsum.photos/200',
      namSinh: '1900' 
    },
    {
      maSv: 'PH123467',
      ten: 'thaivm3',
      nganh: 'Marketing',
      anh: 'https://picsum.photos/200',
      namSinh: '1901' 
    },
    {
      maSv: 'PH123478',
      ten: 'thaivm4',
      nganh: 'Design',
      anh: 'https://picsum.photos/200',
      namSinh: '1902' 
    }
  ]
}
