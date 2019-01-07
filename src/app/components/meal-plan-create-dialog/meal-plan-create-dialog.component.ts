import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RecipeListItem, AddMealPlanRequest } from 'src/app/api/models';
import { MealplanService } from 'src/app/api/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal-plan-create-dialog',
  templateUrl: './meal-plan-create-dialog.component.html',
  styleUrls: ['./meal-plan-create-dialog.component.scss']
})
export class MealPlanCreateDialogComponent implements OnInit {

  recipes: RecipeListItem[];

  constructor(
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private mealPlanService: MealplanService,
    private router: Router) {

      this.recipes = data.recipes;
  }

  ngOnInit() {
  }

  handleWizardSubmit(req: AddMealPlanRequest) {
    this.mealPlanService.postMealplanAdd(req).subscribe(
      (result) => {
        console.log(result);
        if (result !== null) {
          this.router.navigate(['/', 'mealplans', result.mealPlanId]);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
