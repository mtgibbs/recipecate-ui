import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { RecipesService } from 'src/app/api/services';

import { RecipeCreateDialogData } from 'src/app/models';
import { Ingredient, RecipeRequest } from 'src/app/api/models';

@Component({
  selector: 'app-recipe-create-dialog',
  templateUrl: './recipe-create-dialog.component.html',
  styleUrls: ['./recipe-create-dialog.component.scss']
})
export class RecipeCreateDialogComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(
    private dialogRef: MatDialogRef<RecipeCreateDialogData>,
    @Inject(MAT_DIALOG_DATA) data: RecipeCreateDialogData,
    private recipesService: RecipesService,
    private snackBar: MatSnackBar
  ) {

    this.ingredients = data.ingredients;
  }

  ngOnInit() {
  }

  handleSubmit(req: RecipeRequest) {
    this.recipesService.postRecipesAdd(req).subscribe(
      result => {
        this.dialogRef.close({ success: true });
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
}
