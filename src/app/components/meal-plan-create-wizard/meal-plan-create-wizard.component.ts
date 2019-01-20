import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { RecipeListItem, Ingredient, AddMealPlanRequest, ShoppingListIngredient } from 'src/app/api/models';
import { MatStepper, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { IngredientsService, MealplanService } from 'src/app/api/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal-plan-create-wizard',
  templateUrl: './meal-plan-create-wizard.component.html',
  styleUrls: ['./meal-plan-create-wizard.component.scss']
})
export class MealPlanCreateWizardComponent implements OnInit {

  @Input() recipes: RecipeListItem[];
  @Output() submit = new EventEmitter<AddMealPlanRequest>();
  @ViewChild(MatStepper) stepper: MatStepper;

  displayedRecipeColumns = ['select', 'id', 'name'];
  private _recipeDataSource: MatTableDataSource<RecipeListItem>;
  private _recipeSelection: SelectionModel<RecipeListItem>;

  get recipeDataSource(): MatTableDataSource<RecipeListItem> { return this._recipeDataSource; }
  get recipeSelection(): SelectionModel<RecipeListItem> { return this._recipeSelection; }

  displayedIngredientColumns = ['name', 'amount', 'unitOfMeasurement', 'action'];
  private _ingredientsDataSource: MatTableDataSource<Ingredient>;
  private _ingredientSelection: SelectionModel<Ingredient>;

  get ingredientsDataSource(): MatTableDataSource<Ingredient> { return this._ingredientsDataSource; }
  get ingredientSelection(): SelectionModel<Ingredient> { return this._ingredientSelection; }

  finalizeFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ingredientsService: IngredientsService,
    private mealPlanService: MealplanService) {

    this._recipeDataSource = new MatTableDataSource<RecipeListItem>([]);
    this._recipeSelection = new SelectionModel<RecipeListItem>(true, []);

    this._ingredientsDataSource = new MatTableDataSource<Ingredient>([]);
    this._ingredientSelection = new SelectionModel<Ingredient>(true, []);
  }

  ngOnInit() {
    this.recipeDataSource.data = this.recipes;

    this.finalizeFormGroup = this.formBuilder.group({
      mealPlanName: ['', Validators.required],
      mealPlanNotes: ['']
    });
  }

  applySearchFilterToRecipeList(filterValue: string) {
    this.recipeDataSource.filter = filterValue.trim().toLowerCase();
  }

  get recipeSelectionStepComplete(): boolean {
    return this.recipeSelection.selected.length > 0;
  }

  // #region Event Handlers

  recipeStepNextBtnClicked(): void {

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

      this._ingredientsDataSource = new MatTableDataSource<Ingredient>(mappedResult);
      this._ingredientSelection = new SelectionModel<Ingredient>(true, mappedResult);
      this.stepper.next();
    });
  }

  handleRemoveIngredientBtnClick(row: Ingredient): void {
    this.ingredientSelection.toggle(row);
  }

  handleSubmitMealPlanBtnClick(): void {

    const recipeIds = this.recipeSelection.selected.map(r => r.id);
    let shoppingListIngredients: ShoppingListIngredient[] = [];

    if (!this.ingredientSelection.isEmpty()) {
      shoppingListIngredients = this.ingredientSelection.selected.map(ingredient => {
        const result: ShoppingListIngredient = {
          amount: ingredient.amount,
          id: ingredient.id,
          name: ingredient.name,
          unitOfMeasurement: ingredient.unitOfMeasurement
        };
        return result;
      });
    }

    const req: AddMealPlanRequest = {
      name: this.finalizeFormGroup.controls.mealPlanName.value,
      notes: this.finalizeFormGroup.controls.mealPlanNotes.value,
      recipeIds: recipeIds,
      shoppingList: shoppingListIngredients
    };

    this.submit.emit(req);
  }

  // #endregion
}
