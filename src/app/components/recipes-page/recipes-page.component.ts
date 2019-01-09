import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeListItem } from 'src/app/api/models';
import { map } from 'rxjs/operators';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { IngredientsService, RecipesService } from 'src/app/api/services';
import { RecipeCreateDialogData } from 'src/app/models';
import { RecipeCreateDialogComponent } from '../recipe-create-dialog/recipe-create-dialog.component';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.scss']
})
export class RecipesPageComponent implements OnInit {

  displayedColumns = ['id', 'name', 'link'];
  recipesDataSource: MatTableDataSource<RecipeListItem>;

  constructor(
    route: ActivatedRoute,
    private dialog: MatDialog,
    private recipesService: RecipesService,
    private ingredientsService: IngredientsService) {

    route.data.pipe(
      map(data => data.recipes)
    ).subscribe(r => {
      this.recipesDataSource = new MatTableDataSource(r.items);
    });

  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.recipesDataSource.filter = filterValue.trim().toLowerCase();
  }

  addRecipeBtnClicked() {

    this.ingredientsService.getIngredients().subscribe(ingredients => {
      const data: RecipeCreateDialogData = {
        ingredients: ingredients
      };

      const dialogRef = this.dialog.open(RecipeCreateDialogComponent, {
        width: '80vw',
        data: data
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result && result.success) {
          this.recipesService.getRecipes().subscribe(r => {
            this.recipesDataSource.data = r.items;
          });
        }
      });
    });
  }

}
