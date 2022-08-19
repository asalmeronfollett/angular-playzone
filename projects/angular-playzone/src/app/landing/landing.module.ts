import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LandingComponent } from '../landing/landing.component';
import { SigninModule } from './signin/signin.module';



@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    CommonModule,
    SigninModule
  ]
})
export class LandingModule { }
