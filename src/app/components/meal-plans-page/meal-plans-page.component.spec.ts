import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlansPageComponent } from './meal-plans-page.component';

describe('MealPlansPageComponent', () => {
  let component: MealPlansPageComponent;
  let fixture: ComponentFixture<MealPlansPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealPlansPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPlansPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
