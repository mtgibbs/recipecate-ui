import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RecipeListItem, Ingredient } from 'src/app/api/models';
import { MatStepper, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { IngredientsService } from 'src/app/api/services';

@Component({
  selector: 'app-meal-plan-create-wizard',
  templateUrl: './meal-plan-create-wizard.component.html',
  styleUrls: ['./meal-plan-create-wizard.component.scss']
})
export class MealPlanCreateWizardComponent implements OnInit {

  @Input() recipes: RecipeListItem[];
  @ViewChild(MatStepper) stepper: MatStepper;

  displayedRecipeColumns = ['select', 'id', 'name'];
  private _recipeDataSource: MatTableDataSource<RecipeListItem>;
  private _recipeSelection: SelectionModel<RecipeListItem>;

  get recipeDataSource(): MatTableDataSource<RecipeListItem> { return this._recipeDataSource; }
  get recipeSelection(): SelectionModel<RecipeListItem> { return this._recipeSelection; }

  displayedIngredientColumns = ['name', 'amount', 'unitOfMeasurement'];
  private _ingredientsDataSource: MatTableDataSource<Ingredient>;
  private _ingredientSelection: SelectionModel<Ingredient>;

  get ingredientsDataSource(): MatTableDataSource<Ingredient> { return this._ingredientsDataSource; }
  get ingredientSelection(): SelectionModel<Ingredient> { return this._ingredientSelection; }

  constructor(
    private ingredientsService: IngredientsService) {

    this._recipeDataSource = new MatTableDataSource<RecipeListItem>([]);
    this._recipeSelection = new SelectionModel<RecipeListItem>(true, []);

    this._ingredientsDataSource = new MatTableDataSource<Ingredient>([]);
    this._ingredientSelection = new SelectionModel<Ingredient>(true, []);
  }

  ngOnInit() {
    this.recipeDataSource.data = this.recipes;
    console.log(this);
  }

  applySearchFilterToRecipeList(filterValue: string) {
    this.recipeDataSource.filter = filterValue.trim().toLowerCase();
  }

  get recipeSelectionStepComplete(): boolean {
    return this.recipeSelection.selected.length > 0;
  }

  // #region Event Handlers
  recipeStepNextBtnClicked() {

    const recipeIds = this.recipeSelection.selected.map(r => r.id);
    this.ingredientsService.getIngredients(recipeIds).subscribe(result => {

      const groupingMap = result.reduce((map, ingredient) => {
        const key = `${ingredient.id}-${ingredient.name}-${ingredient.unitOfMeasurement}`;

        const i = map.get(key) || Object.assign({}, ingredient, {
          amount: 0
        });

        i.amount += ingredient.amount;

        return map.set(key, i);
      }, new Map);

      const mappedResult = Array.from<Ingredient>(groupingMap.values()).sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

      console.log(result);
      console.log(mappedResult);

      this._ingredientsDataSource = new MatTableDataSource<Ingredient>(mappedResult);
      this._ingredientSelection = new SelectionModel<Ingredient>(true, mappedResult);
      this.stepper.next();
    });
  }
  // #endregion
}
