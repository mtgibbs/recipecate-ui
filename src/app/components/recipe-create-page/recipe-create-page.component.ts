import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient, IngredientRequest, RecipeRequest } from 'src/app/api/models';
import { RecipesService } from 'src/app/api/services';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-recipe-create-page',
  templateUrl: './recipe-create-page.component.html',
  styleUrls: ['./recipe-create-page.component.scss']
})
export class RecipeCreatePageComponent implements OnInit {

  @Input() ingredientList: Ingredient[];
  @Output() recipeSubmit = new EventEmitter<RecipeRequest>();

  name: string;
  instructions: string;
  ingredients: IngredientRequest[];

  constructor() {

    this.ingredients = [{
      amount: null,
      name: '',
      unit_of_measurement: ''
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
      unit_of_measurement: ''
    });
  }

  onRemoveIngredientBtnClick(index: number) {
    if (this.ingredients && this.ingredients.length > 0) {
      this.ingredients.splice(index, 1);
    }
  }
}
