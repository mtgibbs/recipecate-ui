import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MealPlanDetails, MeasuredIngredient } from 'src/app/api/models';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meal-plan-shopping-list-page',
  templateUrl: './meal-plan-shopping-list-page.component.html',
  styleUrls: ['./meal-plan-shopping-list-page.component.scss']
})
export class MealPlanShoppingListPageComponent implements OnInit {

  mealPlan: MealPlanDetails;

  displayedColumns = ['name', 'id', 'unitOfMeasurement', 'amount'];

  ingredientTableDataSource: MatTableDataSource<MeasuredIngredient>;

  constructor(
    route: ActivatedRoute) {

    route.data.pipe(
      map(data => data.mealPlan)
    ).subscribe((mp: MealPlanDetails) => {
      this.mealPlan = mp;
    });

    route.data.pipe(
      map(data => data.ingredients)
    ).subscribe((ingredients: MeasuredIngredient[]) => {
      this.ingredientTableDataSource = new MatTableDataSource(ingredients);
    });
  }

  ngOnInit() {

  }

}
