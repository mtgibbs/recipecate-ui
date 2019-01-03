import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Ingredient, IngredientRequest } from 'src/app/api/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-create-page',
  templateUrl: './recipe-create-page.component.html',
  styleUrls: ['./recipe-create-page.component.scss']
})
export class RecipeCreatePageComponent implements OnInit {

  private _ingredientList: Ingredient[];
  get ingredientList() { return this._ingredientList; }

  // filteredOptions: Observable<string[]>;

  name: string;
  instructions: string;
  ingredients: IngredientRequest[];

  constructor(
    route: ActivatedRoute) {

    route.data.pipe(map(data => data.ingredients))
      .subscribe((i: Ingredient[]) => {
        this._ingredientList = i;
      });

    this.ingredients = [{
      amount: null,
      name: '',
      unit_of_measurement: ''
    }];
  }

  ngOnInit() {
    console.log(this);
  }

  onSubmit() {

  }

  onAddIngredientBtnClick() {
    this.ingredients.push({
      amount: null,
      name: '',
      unit_of_measurement: ''
    });

    console.log(this);
  }

  onRemoveIngredientBtnClick(index: number) {
    if (this.ingredients && this.ingredients.length > 0) {
      this.ingredients.splice(index, 1);
    }
  }
}
