/* tslint:disable */
import { Items } from './items';
export interface MealPlanDetails {
  id: number;
  name: string;
  createdDate: string;
  notes?: string;
  recipes?: Items;
}
