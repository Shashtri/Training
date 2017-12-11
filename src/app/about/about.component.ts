import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  myArray = [];

  constructor() {
  }

  title = 'About Working';

  mainLogo = '../assets/images/logo.jpg';
  messageSu = 'Not clicked';
  isUserCreated: Boolean = false;

  myEvent() {
    this.isUserCreated = !this.isUserCreated;
    this.messageSu = 'Button clicked';
  }
  ontextChange(event) {
    this.title = event.target.value;
  }

  ngOnInit() {
  }
}
