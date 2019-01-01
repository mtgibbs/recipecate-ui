import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RecipesService } from '../api/services';

@Injectable()
export class RecipeDetailResolver implements Resolve<any> {
    constructor(
        private recipesService: RecipesService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        console.log('resolving recipes');
        return this.recipesService.getRecipesId(route.params.id);
    }
}
