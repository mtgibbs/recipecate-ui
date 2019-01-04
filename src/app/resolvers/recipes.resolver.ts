import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipesService } from '../api/services';

@Injectable()
export class RecipesResolver implements Resolve<any> {

    constructor(
        private recipesService: RecipesService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.recipesService.getRecipes();
    }
}
