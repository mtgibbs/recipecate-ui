import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../recipecate-api-client';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
// import other material modules...

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  recipes: RecipeSelectionItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

    const recipeList = this.route.snapshot.data['recipes'];

    this.recipes = recipeList.map((recipe: Recipe) => {
      return {
        ...recipe,
        isSelected: false
      };
    });
  }

  generateShoppingList() {
    const selectedRecipes = this.recipes.filter((recipe) => recipe.isSelected);
    const ids = selectedRecipes.map((recipe) => recipe.id);
    console.log(ids);
    console.log('Selected recipes:', selectedRecipes);
    this.router.navigate(['/shopping-list'], { queryParams: { ids: ids } });
  }
}

interface RecipeSelectionItem extends Recipe {
  isSelected: boolean;
}