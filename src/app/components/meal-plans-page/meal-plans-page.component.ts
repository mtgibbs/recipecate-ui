import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { MealPlan } from 'src/app/api/models/meal-plan';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { MealPlanCreateDialogComponent } from '../meal-plan-create-dialog/meal-plan-create-dialog.component';
import { RecipesService } from 'src/app/api/services';

@Component({
  selector: 'app-meal-plans-page',
  templateUrl: './meal-plans-page.component.html',
  styleUrls: ['./meal-plans-page.component.scss']
})
export class MealPlansPageComponent implements OnInit {

  mealPlans: MealPlan[];

  displayedColumns = ['id', 'name', 'notes', 'link'];
  dataSource: MatTableDataSource<MealPlan>;

  constructor(
    route: ActivatedRoute,
    private dialog: MatDialog,
    private recipeService: RecipesService) {

    route.data.pipe(
      map(data => data.mealPlans)
    ).subscribe(mps => {
      this.mealPlans = mps;
      this.dataSource = new MatTableDataSource(this.mealPlans);
    });
  }

  ngOnInit() {
  }

  addMealPlanBtnClicked() {

    this.recipeService.getRecipes().subscribe(rp => {
      const data = {
        recipes: rp.items
      };

      const dialogRef = this.dialog.open(MealPlanCreateDialogComponent, {
        width: '80vw',
        data: data
      });
    });
  }
}
