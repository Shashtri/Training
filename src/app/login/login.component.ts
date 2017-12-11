import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(private router: Router, private _loginService: LoginService, private route: ActivatedRoute) { }
  username1: any;
  password23: any;
  erroMessage: string;
  returnUrl: string;
  @ViewChild('Lform') loginForm: NgForm;

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    console.log(this.returnUrl);
    localStorage.setItem('token', 'admin');
  }
  formSubmit() {
    const newvalue = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    this._loginService.userList().subscribe(data => {
      this.user = data;
      for (let i = 0; i < this.user.length; i++) {
        if (this.user[i].username === newvalue.username && this.user[i].password === newvalue.password) {
          localStorage.setItem('currentUser', JSON.stringify(this.user[i]));
          this.router.navigate([this.returnUrl]);
        } else {
          console.log(this.erroMessage = 'Invalid Logins: checking validations from API Users Data');
        }
      }
    });
  }

}
