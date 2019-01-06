import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RecipeListItem } from 'src/app/api/models';
import { MatStepper, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-meal-plan-create-wizard',
  templateUrl: './meal-plan-create-wizard.component.html',
  styleUrls: ['./meal-plan-create-wizard.component.scss']
})
export class MealPlanCreateWizardComponent implements OnInit {

  @Input() recipes: RecipeListItem[];
  @ViewChild(MatStepper) stepper: MatStepper;

  selectedRecipes: RecipeListItem[];



  displayedRecipeColumns = ['select', 'id', 'name'];
  recipeDataSource =  new MatTableDataSource<RecipeListItem>([]);
  recipeSelection = new SelectionModel<RecipeListItem>(true, []);

  constructor(

  ) { }

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
}
