import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  title = 'All Users';
  userList: any;

  constructor(public _datalist: DataService) { }

  ngOnInit() {
    this._datalist.getadminuserlist().subscribe((data) => {
      this.userList = data;
    });
  }

}
