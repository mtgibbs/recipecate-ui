/* tslint:disable */
export interface IngredientRequest {
  name: string;
  amount: number;
  unitOfMeasurement: 'unit' | 'cup' | 'tsp' | 'tbs' | 'oz' | 'lb' | 'pint' | 'quart' | 'gallon';
}
