import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MockComponent } from 'ng-mocks';
import { SigninComponent } from './signin/signin.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let signinComponent: SigninComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockComponent(SigninComponent)
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have its signinComponent child', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const counterEl = fixture.debugElement.query(By.directive(SigninComponent));
    signinComponent = counterEl.componentInstance;

    expect(signinComponent).toBeTruthy();
  })
});
