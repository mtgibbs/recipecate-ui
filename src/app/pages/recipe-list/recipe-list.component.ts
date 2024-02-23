import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../../recipecate-api-client';

import { MatButtonModule } from '@angular/material/button';
import { RecipeCardComponent, RecipeCardInfo } from '../../components/recipe-card/recipe-card.component';


@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeCardComponent,
    MatButtonModule,
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  recipes: RecipeCardInfo[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

    const recipeList = this.route.snapshot.data['recipes'];

    this.recipes = recipeList.map((recipe: Recipe) => {
      return {
        ...recipe,
        isSelected: false,
        showIngredients: true,
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

