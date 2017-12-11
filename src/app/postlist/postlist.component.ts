import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';
import { CommentServiceService } from './comment-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  public commentsAll = [];
  public empDataList = [];
  public commentdec: any;

  title = 'User List From Json Server';
  id: any;
  constructor(private _datalist: DataService, private _commentlist: CommentServiceService) { }

  @ViewChild('c') commentForm: NgForm; // local referance for Form to get field values

  ngOnInit() {
    this._datalist.getAllposts().subscribe(data => {
      this.empDataList = data;
    });

    this._commentlist.commentsList().subscribe(data => {
      this.commentsAll = data;
    });
  }

  createComment() {
    const newvalueComment = {
      commentdesc: this.commentForm.value.commentdesc,
      postid: 2
    };
    console.log(newvalueComment);
    this._commentlist.createComment(newvalueComment).subscribe(data => {
      this.commentsAll = data;
    });
  }
}
