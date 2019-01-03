/* tslint:disable */
import { IngredientRequests } from './ingredient-requests';
export interface RecipeRequest {
  name: string;
  instructions?: string;
  ingredients: IngredientRequests;
}
