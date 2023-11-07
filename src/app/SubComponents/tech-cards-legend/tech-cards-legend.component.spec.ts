import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCardsLegendComponent } from './tech-cards-legend.component';

describe('TechCardsLegendComponent', () => {
  let component: TechCardsLegendComponent;
  let fixture: ComponentFixture<TechCardsLegendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechCardsLegendComponent]
    });
    fixture = TestBed.createComponent(TechCardsLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
