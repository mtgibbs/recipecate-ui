import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MealplanService } from '../api/services/mealplan.service';
import { MealPlan } from '../api/models/meal-plan';

@Injectable()
export class MealPlansResolver implements Resolve<MealPlan[]> {
    constructor(
        private mealPlanService: MealplanService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<MealPlan[]> {
        return this.mealPlanService.getMealplan();
    }
}
