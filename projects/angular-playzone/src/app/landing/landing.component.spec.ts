import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';
import { LandingComponent } from './landing.component';
import { SigninComponent } from './signin/signin.component';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let signinComponent: SigninComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LandingComponent,
        // SigninComponent
        MockComponent(SigninComponent)
      ],
      imports: [
        // SigninModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have its signinComponent child', () => {
    const fixture = TestBed.createComponent(LandingComponent);
    const counterEl = fixture.debugElement.query(By.directive(SigninComponent));
    signinComponent = counterEl.componentInstance;

    expect(signinComponent).toBeTruthy();
  });
});
