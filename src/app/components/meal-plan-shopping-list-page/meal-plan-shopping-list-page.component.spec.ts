import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanShoppingListPageComponent } from './meal-plan-shopping-list-page.component';

describe('MealPlanShoppingListPageComponent', () => {
  let component: MealPlanShoppingListPageComponent;
  let fixture: ComponentFixture<MealPlanShoppingListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealPlanShoppingListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPlanShoppingListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
