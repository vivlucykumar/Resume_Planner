import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileVideo } from './profile-video';

describe('ProfileVideo', () => {
  let component: ProfileVideo;
  let fixture: ComponentFixture<ProfileVideo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileVideo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileVideo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
