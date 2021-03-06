import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient, IngredientRequest, RecipeRequest, UnitsOfMeasurementList } from 'src/app/api/models';

@Component({
  selector: 'app-recipe-create-form',
  templateUrl: './recipe-create-form.component.html',
  styleUrls: ['./recipe-create-form.component.scss']
})
export class RecipeCreateFormComponent implements OnInit {

  @Input() ingredientList: Ingredient[];
  @Input() unitsOfMeasurement: UnitsOfMeasurementList;

  @Output() recipeSubmit = new EventEmitter<RecipeRequest>();

  name: string;
  instructions: string;
  ingredients: IngredientRequest[];

  constructor() {
    this.ingredients = [{
      amount: null,
      name: '',
      unitOfMeasurement: null
    }];
  }

  ngOnInit() {
  }

  onSubmit() {

    const req: RecipeRequest = {
      ingredients: this.ingredients,
      instructions: this.instructions,
      name: this.name
    };

    this.recipeSubmit.emit(req);
  }

  onAddIngredientBtnClick() {
    this.ingredients.push({
      amount: null,
      name: '',
      unitOfMeasurement: null
    });
  }

  onRemoveIngredientBtnClick(index: number) {
    if (this.ingredients && this.ingredients.length > 0) {
      this.ingredients.splice(index, 1);
    }
  }
}
