import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTwoComponent } from './profile-two.component';

describe('ProfileTwoComponent', () => {
  let component: ProfileTwoComponent;
  let fixture: ComponentFixture<ProfileTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileTwoComponent]
    });
    fixture = TestBed.createComponent(ProfileTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
