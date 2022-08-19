import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {

  public form!: FormGroup;

  private routeSub!: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      userEmail: [null, [Validators.required, Validators.email]]
    });

    this.routeSub = this.route.data.subscribe(data => {
      console.log('//Route data', data);
    });
  }

  onSubmit() {
    console.log('//Submitting user signin form', this.form.value);
    if (this.form.valid) {
      return true;
    }

    return false;
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

}
