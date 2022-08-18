import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      userEmail: [null, [Validators.required, Validators.email]]
    })
  }

  submit() {
    console.log('//Submitting user signin form', this.form.value);
    if (this.form.valid) {
      return true;
    }

    return false;
  }

}
