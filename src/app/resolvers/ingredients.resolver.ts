import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IngredientsService } from '../api/services';
import { Ingredient } from '../api/models';

@Injectable()
export class IngredientsResolver implements Resolve<Ingredient[]> {
    constructor(
        private ingredientsService: IngredientsService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Ingredient[]> {
        return this.ingredientsService.getIngredients();
    }
}
