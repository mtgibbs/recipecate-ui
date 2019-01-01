import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { RecipeListItem } from 'src/app/api/models';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.scss']
})
export class RecipeDetailPageComponent implements OnInit {

  private _recipes: RecipeListItem[];

  constructor(
    private route: ActivatedRoute) {

    this.route.data.subscribe(r => {
      this._recipes = r.items;
    });

  }

  ngOnInit() {
  }

}
