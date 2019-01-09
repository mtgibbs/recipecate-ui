import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCreateFormComponent } from './recipe-create-form.component';

describe('RecipeCreatePageComponent', () => {
  let component: RecipeCreateFormComponent;
  let fixture: ComponentFixture<RecipeCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
