/* tslint:disable */
export interface Ingredient {
  id: number;
  recipeId?: number;
  name: string;
  unitOfMeasurement?: 'unit' | 'cup' | 'tsp' | 'tbs' | 'oz' | 'lb' | 'pint' | 'quart' | 'gallon';
  amount?: number;
}
