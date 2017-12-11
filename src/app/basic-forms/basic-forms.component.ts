import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic-forms',
  templateUrl: './basic-forms.component.html',
  styleUrls: ['./basic-forms.component.css']
})
export class BasicFormsComponent implements OnInit {
  title = 'Forms';
  constructor() { }

  @ViewChild('lForm') myForm: NgForm;

  myEmail: string;
  myPassword: string;

  ngOnInit() {
  }
  onSubmit(lForm) {
    console.log(this.myForm);
  }
}
