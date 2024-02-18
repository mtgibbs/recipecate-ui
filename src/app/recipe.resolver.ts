import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Recipe, RecipesService } from '../recipecate-api-client';

export const recipeResolver: ResolveFn<Recipe[]> = (route, state) => {
  return inject(RecipesService).getAllRecipes();
};
