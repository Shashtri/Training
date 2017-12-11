import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';



@Injectable()
export class CommentServiceService {

  constructor(private http: Http) { }

  commentsList() { // Getting Comments list from API
    return this.http.get('http://localhost:3000/comments')
      .map((res: Response) => res.json());
  }
  createComment(newvalueComment: any) {
    return this.http.post('http://localhost:3000/comments/', newvalueComment)
      .map((res: Response) => res.json());
  }

}
