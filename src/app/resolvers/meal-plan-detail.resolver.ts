import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MealplanService } from '../api/services/mealplan.service';
import { MealPlanDetails } from '../api/models/meal-plan-details';

@Injectable()
export class MealPlanDetailResolver implements Resolve<MealPlanDetails> {

    constructor(
        private mealPlanService: MealplanService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<MealPlanDetails> {
        return this.mealPlanService.getMealplanIdDetail(route.params.id);
    }
}
