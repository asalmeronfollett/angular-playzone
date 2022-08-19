import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { randEmail, randUuid } from '@ngneat/falso';
import { from } from 'rxjs';
import { SigninComponent } from './signin.component';


describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: ActivatedRoute, useValue: { data: from([{ id: randUuid() }]), },
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submit should return false if form is invalid', () => {
    const submitRes = component.onSubmit();
    expect(submitRes).toBeFalse();
  });

  it('submit should return true if form is valid', () => {
    const userEmailCtrl = component.form.controls['userEmail'];
    const userEmail = randEmail();
    userEmailCtrl.setValue(userEmail);
    const submitRes = component.onSubmit();
    expect(submitRes).toBeTrue();
  });
});
