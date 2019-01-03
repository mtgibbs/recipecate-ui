import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Ingredient } from 'src/app/api/models';

@Component({
  selector: 'app-recipe-create-page',
  templateUrl: './recipe-create-page.component.html',
  styleUrls: ['./recipe-create-page.component.scss']
})
export class RecipeCreatePageComponent implements OnInit {

  private _ingredientList: Ingredient[];
  get ingredientList() { return this._ingredientList; }

  constructor(
    route: ActivatedRoute) {

    route.data.pipe(map(data => data.ingredients))
      .subscribe((i: Ingredient[]) => {
        this._ingredientList = i;
      });
  }

  ngOnInit() {
    console.log(this);
  }

}
