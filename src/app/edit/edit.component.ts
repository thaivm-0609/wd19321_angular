import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; //lấy giá trị params truyền trên url
@Component({
  selector: 'app-edit',
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  constructor(
    private client:HttpClient,
    private router:Router,
    private actRoute:ActivatedRoute
  ) {}

  ngOnInit():void {
    //cú pháp this.actRoute.snapshot.params['tenParams']
    console.log(this.actRoute.snapshot.params['id']);
  }
}
