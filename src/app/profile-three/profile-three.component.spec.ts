import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileThreeComponent } from './profile-three.component';

describe('ProfileThreeComponent', () => {
  let component: ProfileThreeComponent;
  let fixture: ComponentFixture<ProfileThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileThreeComponent]
    });
    fixture = TestBed.createComponent(ProfileThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
