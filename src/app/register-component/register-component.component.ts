import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
  confirmPass: string;
  gender: string;
  contactNo: number;
  dateOfBirth: Date
  address: string;

  constructor() { }

  ngOnInit() {
  }

}