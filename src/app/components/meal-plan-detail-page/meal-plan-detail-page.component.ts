import { Component, OnInit } from '@angular/core';
import { MealPlanDetails } from 'src/app/api/models/meal-plan-details';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { RecipeListItem } from 'src/app/api/models';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-meal-plan-detail-page',
  templateUrl: './meal-plan-detail-page.component.html',
  styleUrls: ['./meal-plan-detail-page.component.scss']
})
export class MealPlanDetailPageComponent implements OnInit {

  mealPlan: MealPlanDetails;

  displayedColumns = ['name', 'id', 'instructions', 'link'];
  recipeTableDataSource: MatTableDataSource<RecipeListItem>;

  constructor(
    route: ActivatedRoute) {

    route.data.pipe(
      map(data => data.mealPlan)
    ).subscribe((mp: MealPlanDetails) => {
      this.mealPlan = mp;
      this.recipeTableDataSource = new MatTableDataSource(this.mealPlan.recipes);
    });
  }

  ngOnInit() {

  }

}
