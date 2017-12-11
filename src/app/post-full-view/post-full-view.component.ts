import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-full-view',
  templateUrl: './post-full-view.component.html',
  styleUrls: ['./post-full-view.component.css']
})
export class PostFullViewComponent implements OnInit {
  empDataList = [];
  newid: any;
  constructor(private _datalist: DataService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // Getting If from Parameter using activated route
    this.route.params.subscribe(data =>
      this.newid = data
    );
    // Assigning New value
    const newvalue = {
      id: this.newid
    };
    // Pushing new value in server as ID
    this._datalist.fullPost(newvalue.id).subscribe(data => {
      this.empDataList = data;
      console.log(this.empDataList);
    });

  }

  // Delete post function
  delete() {
    const newvalue = {
      id: this.newid
    };
    this._datalist.deletePost(newvalue.id).subscribe(data => {
      this.router.navigate(['./dashboard/postlist']);
    });
  }
}
