import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  constructor(public _datalist: DataService) { }
  title = 'Add User';
  userList = [];
  userdata: Userinfo[];
  userForm: FormGroup;
  gender = ['male', 'female'];
  countries = ['Inida', 'USA', 'Uk'];
  hobbies = ['Eating', 'Drinking', 'Sleeping'];
  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      gender: new FormControl('male'),
      countries: new FormControl('Inida', [Validators.required]),
      hobbies: new FormControl(null, Validators.required),
      cpassword: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit(userForm) {
    this._datalist.createadminUser(this.userForm.value).subscribe(data => {
      this.userList = data;
    });
    this.userForm.reset();
  }
}
interface Userinfo {
  name: string;
  email: string;
  phone: string;
  username: string;
  password: any;
  cpassword: any;
  gender: any;
}
