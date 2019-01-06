/* tslint:disable */
import { RecipeIds } from './recipe-ids';
import { ShoppingList } from './shopping-list';
export interface AddMealPlanRequest {
  name: string;
  notes?: string;
  recipeIds?: RecipeIds;
  shoppingList?: ShoppingList;
}
