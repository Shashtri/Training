import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  title = 'Reactive Forms';

  customForm: FormGroup;
  genders = ['male', 'female'];
  constructor() { }

  ngOnInit() {
    this.customForm = new FormGroup({
      childFromgroup: new FormGroup({
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
      gender: new FormControl('male')
    });
  }
  onSubmit() {
    if (this.customForm.valid) {
      console.log(this.customForm.value);
    }
  }
}
