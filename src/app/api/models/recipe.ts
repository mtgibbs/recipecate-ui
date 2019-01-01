/* tslint:disable */
import { Ingredients } from './ingredients';
export interface Recipe {
  id: number;
  name?: string;
  instructions?: string;
  ingredients?: Ingredients;
}
