/* tslint:disable */
import { RecipeIds } from './recipe-ids';
export interface AddMealPlanRequest {
  name: string;
  notes?: string;
  recipeIds?: RecipeIds;
}
