import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeIntroComponent } from './about-me-intro.component';

describe('AboutMeIntroComponent', () => {
  let component: AboutMeIntroComponent;
  let fixture: ComponentFixture<AboutMeIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMeIntroComponent]
    });
    fixture = TestBed.createComponent(AboutMeIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
