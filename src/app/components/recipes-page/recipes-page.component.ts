import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeListItem } from 'src/app/api/models';
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.scss']
})
export class RecipesPageComponent implements OnInit {

  displayedColumns = ['id', 'name', 'link'];
  dataSource: MatTableDataSource<RecipeListItem>;
  recipes: RecipeListItem[];

  constructor(
    route: ActivatedRoute) {

    route.data.pipe(
      map(data => data.recipes)
    ).subscribe(r => {
      this.recipes = r.items;
      this.dataSource = new MatTableDataSource(this.recipes);
    });

  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
