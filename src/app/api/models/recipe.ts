/* tslint:disable */
import { IngredientDetails } from './ingredient-details';
export interface Recipe {
  id: number;
  name?: string;
  instructions?: string;
  ingredients?: IngredientDetails;
}
