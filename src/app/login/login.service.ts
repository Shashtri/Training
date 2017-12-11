import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class LoginService {
  user: any;
  constructor(private http: Http) { }
  userList() { // for User list api
    return this.http.get('http://localhost:3000/users')
      .map((res: Response) => res.json());
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
