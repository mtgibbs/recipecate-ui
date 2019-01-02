import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Recipe, Ingredient } from 'src/app/api/models';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.scss']
})
export class RecipeDetailPageComponent implements OnInit {

  recipe: Recipe;

  displayedColumns = ['name', 'amount', 'unit_of_measurement'];
  ingredientTableDataSource: MatTableDataSource<Ingredient>;

  constructor(
    route: ActivatedRoute) {
      // recipe

      route.data.pipe(
        map(data => data.recipe)
      ).subscribe((r: Recipe) => {
        this.recipe = r;
        this.ingredientTableDataSource = new MatTableDataSource(this.recipe.ingredients);
      });
  }

  ngOnInit() {
    console.log(this.recipe);
  }

}
