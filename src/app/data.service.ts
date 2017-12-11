import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class DataService {

  constructor(private http: Http) { }
  userList() { // for User list api
    return this.http.get('https://reqres.in/api/unknown')
      .map((res: Response) => res.json());
  }

  getAllposts() { // for service page data
    return this.http.get('http://localhost:3000/posts')
      .map((res: Response) => res.json());
  }
  createUser(newvalue: any) {
    return this.http.post('http://localhost:3000/posts', newvalue)
      .map((res: Response) => res.json());
  }
  fullPost(newvalue: any) {
    return this.http.get('http://localhost:3000/posts/' + newvalue.id)
      .map((res: Response) => res.json());
  }
  deletePost(newvalue: any) {
    return this.http.delete('http://localhost:3000/posts/' + newvalue.id)
      .map((res: Response) => res.json());
  }
  updatepost(newvalue: any) {
    const headers = new Headers(); // optional header or to tell the format of data type
    return this.http.put('http://localhost:3000/posts/' + newvalue.id.id, newvalue, { headers: headers })
      .map(res => res.json());
  }

  getprofile() { // for service page data
    return this.http.get('http://localhost:3000/profile')
      .map((res: Response) => res.json());
  }
  getprofileupdate(newinputs: any) { // for service page data
    return this.http.post('http://localhost:3000/profile', newinputs)
      .map((res: Response) => res.json());
  }
  getadminuserlist() { // for service page data
    return this.http.get('http://localhost:3000/users')
      .map((res: Response) => res.json());
  }
  createadminUser(userForm: any) { // for service page data
    return this.http.post('http://localhost:3000/users', userForm)
      .map((res: Response) => res.json());
  }

  // updatepost(newvalue: any) {
  //   const headers = new Headers({ 'Content-Type': 'application/json' });
  //   const options = new RequestOptions({ headers: headers });
  //   const body = JSON.stringify(newvalue);
  //   alert(JSON.stringify(newvalue.id.id));
  //   return this.http.put('http://localhost:3000/posts/' + newvalue.id.id, body, options)
  //     .map((res: Response) => res.json());
  // }

}
