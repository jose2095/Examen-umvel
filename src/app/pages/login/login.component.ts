import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //variable declarations
  public authForm: FormGroup;
  public loading: boolean = false;

  constructor() {
   
  }

  login() {
    
  }

  ngOnInit(): void {
  }

}
