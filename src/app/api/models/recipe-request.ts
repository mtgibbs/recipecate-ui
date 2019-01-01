/* tslint:disable */
import { IngredientsRequest } from './ingredients-request';
export interface RecipeRequest {
  name: string;
  instructions?: string;
  ingredients: IngredientsRequest;
}
