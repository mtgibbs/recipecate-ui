import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RecipeListItem } from 'src/app/api/models';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-meal-plan-create-wizard',
  templateUrl: './meal-plan-create-wizard.component.html',
  styleUrls: ['./meal-plan-create-wizard.component.scss']
})
export class MealPlanCreateWizardComponent implements OnInit {

  @Input() recipes: RecipeListItem[];
  @ViewChild(MatStepper) stepper: MatStepper;

  selectedRecipes: RecipeListItem[];

  constructor(

  ) { }

  ngOnInit() {
    console.log(this);
  }

}
