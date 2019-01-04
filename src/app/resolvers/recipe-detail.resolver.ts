import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipesService } from '../api/services';
import { Recipe } from '../api/models';

@Injectable()
export class RecipeDetailResolver implements Resolve<Recipe> {

    constructor(
        private recipesService: RecipesService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Recipe> {
        return this.recipesService.getRecipesIdDetail(route.params.id);
    }
}
