import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title = 'Profile';
  profiledata: any = {};

  @ViewChild('f') myForm: NgForm;

  constructor(private _datalist: DataService) { }

  ngOnInit() {
    this._datalist.getprofile().subscribe(data => {
      this.profiledata = data;
      console.log(this.profiledata);
      console.log(this.myForm);
    });
  }
  profileUpdate() {
    const newinputs = {
      fname: this.myForm.value.fname,
      email: this.myForm.value.email,
      phone: this.myForm.value.phone,
      address: this.myForm.value.address
    };
    console.log(this.myForm);
    this._datalist.getprofileupdate(newinputs).subscribe(data => {
      this.profiledata = data;
    });
  }
}
