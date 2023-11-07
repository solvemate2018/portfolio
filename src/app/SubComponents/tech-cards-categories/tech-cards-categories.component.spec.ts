import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCardsCategoriesComponent } from './tech-cards-categories.component';

describe('TechCardsCategoriesComponent', () => {
  let component: TechCardsCategoriesComponent;
  let fixture: ComponentFixture<TechCardsCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechCardsCategoriesComponent]
    });
    fixture = TestBed.createComponent(TechCardsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
