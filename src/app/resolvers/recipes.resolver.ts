import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { RecipesResponse, RecipesService } from '../../recipecate-api-client';

export const recipesResolver: ResolveFn<RecipesResponse> = (route, state) => {
  const recipeService = inject(RecipesService);
  const search = route.queryParams['search'];
  const cookType = route.queryParams['cookType'];
  const cuisine = route.queryParams['cuisine'];
  const page = route.queryParams['page'];
  const pageSize = route.queryParams['size'];

  return recipeService.getRecipes(search, cookType, cuisine, page, pageSize);
};
