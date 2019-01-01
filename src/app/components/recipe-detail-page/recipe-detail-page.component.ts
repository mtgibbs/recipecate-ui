import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.scss']
})
export class RecipeDetailPageComponent implements OnInit {

  private _recipes: [];

  constructor(
    private route: ActivatedRoute) {

    this.route.data.pipe(
      map(data => data.recipes)
    ).subscribe(recipes => {
      this._recipes = recipes;
    });

  }

  ngOnInit() {
  }

}
