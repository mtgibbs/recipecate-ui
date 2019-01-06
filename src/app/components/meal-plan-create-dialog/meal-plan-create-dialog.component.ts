import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RecipeListItem } from 'src/app/api/models';

@Component({
  selector: 'app-meal-plan-create-dialog',
  templateUrl: './meal-plan-create-dialog.component.html',
  styleUrls: ['./meal-plan-create-dialog.component.scss']
})
export class MealPlanCreateDialogComponent implements OnInit {

  recipes: RecipeListItem[];

  constructor(
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) data: any) {

      this.recipes = data.recipes;
  }

  ngOnInit() {
  }

}
