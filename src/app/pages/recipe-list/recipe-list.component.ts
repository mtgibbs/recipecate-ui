import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe, RecipesResponse } from '../../../recipecate-api-client';

import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { RecipeCardComponent, RecipeCardInfo } from '../../components/recipe-card/recipe-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeCardComponent,
    MatButtonModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {

  selectedRecipeIds: string[] = [];
  recipes: RecipeCardInfo[] = [];
  pageIndex: number = 0;
  pageSize: number = 10;
  totalRecords: number = 0;
  searchString: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

    this.route.data.subscribe(data => {
      const recipesResponse: RecipesResponse = data['recipes'];

      this.totalRecords = recipesResponse.totalCount;

      this.recipes = recipesResponse.recipes.map((recipe: Recipe) => {
        return {
          ...recipe,
          isSelected: this.selectedRecipeIds.includes(recipe.id),
        };
      });
    });

    this.route.queryParams.subscribe(params => {
      this.pageIndex = params['page'] || 0;
      this.pageSize = params['size'] || 10;
      this.searchString = params['search'] || '';
    });
  }

  generateShoppingList() {
    this.router.navigate(['/shopping-list'], { queryParams: { ids: this.selectedRecipeIds } });
  }

  handlePageEvent($event: PageEvent) {
    this.router.navigate(['/recipes'], {
      queryParams: {
        page: $event.pageIndex,
        size: $event.pageSize,
        search: this.searchString === '' ? null : this.searchString
      }
    });
  }

  handleRecipeSelected(recipe: RecipeCardInfo) {
    console.log('Recipe selected:', recipe);
    if (recipe.isSelected) {
      this.selectedRecipeIds.push(recipe.id);
    } else {
      const index = this.selectedRecipeIds.findIndex(id => id === recipe.id);
      if (index !== -1) {
        this.selectedRecipeIds.splice(index, 1);
      }
    }
  }

  searchRecipes() {
    this.router.navigate(['/recipes'], { queryParams: { search: this.searchString === '' ? null : this.searchString } });
  }

  get generateShoppingListDisabled() {
    return this.selectedRecipeIds.length === 0;
  }
}
