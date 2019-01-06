import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanCreateDialogComponent } from './meal-plan-create-dialog.component';

describe('MealPlanCreateDialogComponent', () => {
  let component: MealPlanCreateDialogComponent;
  let fixture: ComponentFixture<MealPlanCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealPlanCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPlanCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
