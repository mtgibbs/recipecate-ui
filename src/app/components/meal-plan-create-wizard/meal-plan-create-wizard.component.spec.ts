import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanCreateWizardComponent } from './meal-plan-create-wizard.component';

describe('MealPlanCreateWizardComponent', () => {
  let component: MealPlanCreateWizardComponent;
  let fixture: ComponentFixture<MealPlanCreateWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealPlanCreateWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPlanCreateWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
