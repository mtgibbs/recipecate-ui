import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { Ingredient, IngredientRequest, RecipeRequest } from 'src/app/api/models';
import { RecipesService } from 'src/app/api/services';
import { MatSnackBar } from '@angular/material';

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
    route: ActivatedRoute,
    private router: Router,
    private recipesService: RecipesService,
    private snackBar: MatSnackBar) {

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
    console.log(this);

    const req: RecipeRequest = {
      ingredients: this.ingredients,
      instructions: this.instructions,
      name: this.name
    };

    this.recipesService.postRecipesAdd(req).subscribe(
      result => {
        console.log(result);
        this.snackBar.open('Recipe added successfully!', 'Ok', {
          duration: 1000
        });
      },
      err => {
        console.log(err);
        this.snackBar.open('Reciped failed to add', 'Dismiss', {
          duration: 1500
        });
      });
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
