import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTestimonialsComponent } from './app-testimonials.component';

describe('AppTestimonialsComponent', () => {
  let component: AppTestimonialsComponent;
  let fixture: ComponentFixture<AppTestimonialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppTestimonialsComponent],
    });
    fixture = TestBed.createComponent(AppTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
