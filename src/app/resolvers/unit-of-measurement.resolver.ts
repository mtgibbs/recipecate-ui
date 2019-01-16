import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IngredientsService } from '../api/services';
import { UnitsOfMeasurementList } from '../api/models';

@Injectable()
export class UnitOfMeasurementResolver implements Resolve<UnitsOfMeasurementList> {

    constructor(
        private ingredientsService: IngredientsService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<UnitsOfMeasurementList> {
        return this.ingredientsService.getIngredientsUnitsofmeasurement();
    }
}
