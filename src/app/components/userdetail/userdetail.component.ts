import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {

  @Input() user:User;

  
  constructor() { 
   
  }

  ngOnInit(): void {
  }


ngOnDestroy(): void {
  this.user=null;
}

  editUser(){

  }

}
