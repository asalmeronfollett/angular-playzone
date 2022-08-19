import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { SigninComponent } from './signin.component';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  exports: [
    SigninComponent
  ]
})
export class SigninModule { }
