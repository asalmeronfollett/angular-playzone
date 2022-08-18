import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { randEmail } from '@ngneat/falso';
import { SigninComponent } from './signin.component';


describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninComponent],
      imports: [ReactiveFormsModule]
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
    const submitRes = component.submit();
    expect(submitRes).toBeFalse();
  });

  it('submit should return true if form is valid', async () => {
    const userEmailCtrl = component.form.controls['userEmail'];
    const userEmail = randEmail();
    userEmailCtrl.setValue(userEmail);
    const submitRes = component.submit();
    expect(submitRes).toBeTrue();
  });
});
