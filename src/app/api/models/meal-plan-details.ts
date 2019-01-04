/* tslint:disable */
import { Items } from './items';
export interface MealPlanDetails {
  id: number;
  name: string;
  createdDate: number;
  notes?: string;
  recipes?: Items;
}
