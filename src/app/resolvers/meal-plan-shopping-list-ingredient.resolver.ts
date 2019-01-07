import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MealplanService } from '../api/services/mealplan.service';
import { MeasuredIngredient } from '../api/models';

@Injectable()
export class MealPlanShoppingListIngredientResolver implements Resolve<MeasuredIngredient[]> {

    constructor(
        private mealPlanService: MealplanService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<MeasuredIngredient[]> {
        return this.mealPlanService.getMealplanIdShoppinglist(route.params.id);
    }
}
