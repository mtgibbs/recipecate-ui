import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe, RecipesResponse } from '../../../recipecate-api-client';

import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { RecipeCardComponent, RecipeCardInfo } from '../../components/recipe-card/recipe-card.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeCardComponent,
    MatButtonModule,
    MatPaginatorModule,
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
  }

  generateShoppingList() {
    this.router.navigate(['/shopping-list'], { queryParams: { ids: this.selectedRecipeIds } });
  }

  handlePageEvent($event: PageEvent) {
    this.router.navigate(['/recipes'], { queryParams: { page: $event.pageIndex, size: $event.pageSize } });
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
}

