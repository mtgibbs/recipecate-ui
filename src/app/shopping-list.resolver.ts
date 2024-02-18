import { ResolveFn } from '@angular/router';
import { Ingredient, RecipesService } from '../recipecate-api-client';
import { inject } from '@angular/core';

export const shoppingListResolver: ResolveFn<Ingredient[]> = (route, state) => {
  const recipeService = inject(RecipesService);
  console.log('route.queryParams[ids]', route.queryParams['ids']);
  return recipeService.getShoppingListByIds(route.queryParams['ids']);
};
