import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updatepost',
  templateUrl: './updatepost.component.html',
  styleUrls: ['./updatepost.component.css']
})
export class UpdatepostComponent implements OnInit {
  newid: any;

  title = 'Update Post';
  public posttitle: any;
  public body: any;
  public img: any;
  public empDataList = [];
  public sucessMessage: any;
  public messageTrue: any;
  public today: number = Date.now();

  constructor(private _datalist: DataService, private route: ActivatedRoute, ) { }
  @ViewChild('f') myForm: NgForm;

  ngOnInit() {
    // Getting ID from Parameter using activated route
    this.route.params.subscribe(data =>
      this.newid = data
    );
    // Assigning ID value(Data) to variable
    const newvalue = {
      id: this.newid
    };
    // Pushing ID in pharams and getting Perticular ID information
    this._datalist.fullPost(newvalue.id).subscribe(data => {
      this.empDataList = data;
    });
  }
  // On Submit Modified Inputs sending as a "newvalue" and updating service using PUT method
  onSubmitUpdate() {
    const newvalue = {
      id: this.newid,
      posttitle: this.myForm.value.posttitle,
      body: this.myForm.value.body,
      img: this.myForm.value.file,
      date: this.today
    };
    this._datalist.updatepost(newvalue).subscribe(data => {
      console.log('User added successfully');
      this.sucessMessage = "Post updated Sucessfully";
      this.messageTrue = true;
    });
  }
}
