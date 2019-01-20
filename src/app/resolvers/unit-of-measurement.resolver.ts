import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IngredientsService } from '../api/services';
import { UnitsOfMeasurementList } from '../api/models';
import { mergeMap } from 'rxjs/operators';
import { SessionStorageService } from 'ngx-store';

@Injectable()
export class UnitOfMeasurementResolver implements Resolve<UnitsOfMeasurementList> {

    constructor(
        private ingredientsService: IngredientsService,
        private sessionStorageService: SessionStorageService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<UnitsOfMeasurementList> {

        const list: UnitsOfMeasurementList = this.sessionStorageService.get('units_of_measurement');

        if (list && list.length !== 0) {
            return of(list);
        }

        return this.ingredientsService.getIngredientsUnitsofmeasurement().pipe(
            mergeMap(resultList => {
                this.sessionStorageService.set('units_of_measurement', resultList);
                return of(resultList);
            })
        );
    }
}
