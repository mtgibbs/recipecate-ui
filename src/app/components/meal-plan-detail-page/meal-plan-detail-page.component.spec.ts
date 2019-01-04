import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanDetailPageComponent } from './meal-plan-detail-page.component';

describe('MealPlanDetailPageComponent', () => {
  let component: MealPlanDetailPageComponent;
  let fixture: ComponentFixture<MealPlanDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealPlanDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPlanDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
