import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  title = 'Add Post';

  public posttitle: any;
  public body: any;
  public img: any;
  public empDataList = [];
  public sucessMessage: any;
  public messageTrue: any;
  constructor(public _datalist: DataService) { }
  public today: number = Date.now();
  public formSubmitted = false;
  // importing from from html
  @ViewChild('f') myForm: NgForm;

  restvalue() {
    this.formSubmitted = true;
  }
  // Create Post and add to Serevcice
  onSubmit() {
    const newvalue = {
      posttitle: this.myForm.value.posttitle,
      body: this.myForm.value.body,
      img: this.myForm.value.file,
      date: this.today
    };
    this._datalist.createUser(newvalue).subscribe(data => {
      this.empDataList.push();
      this.sucessMessage = 'Post added sucessfully';
      console.log(this.empDataList);
      this.messageTrue = true;
      this.formSubmitted = false;
      this.myForm.reset();
    });
  }
  ngOnInit() {
    console.log(this.myForm);
  }
}
