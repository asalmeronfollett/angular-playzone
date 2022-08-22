import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarTopModule } from 'projects/shared/navbar-top/navbar-top.module';
import { LandingComponent } from '../landing/landing.component';
import { SigninModule } from './signin/signin.module';



@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    CommonModule,
    SigninModule,
    NavbarTopModule
  ]
})
export class LandingModule { }
