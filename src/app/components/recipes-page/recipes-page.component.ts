import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeListItem } from 'src/app/api/models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.scss']
})
export class RecipesPageComponent implements OnInit {

  _recipes: RecipeListItem[];

  constructor(
    route: ActivatedRoute) {

    route.data.pipe(
      map(data => data.recipes)
    ).subscribe(r => {
      this._recipes = r.items;
    });

  }

  ngOnInit() {
  }

}
