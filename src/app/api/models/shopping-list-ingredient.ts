/* tslint:disable */
export interface ShoppingListIngredient {
  id?: number;
  name?: string;
  amount: number;
  unitOfMeasurement: 'unit' | 'cup' | 'tsp' | 'tbs' | 'oz' | 'lb' | 'pint' | 'quart' | 'gallon';
}
