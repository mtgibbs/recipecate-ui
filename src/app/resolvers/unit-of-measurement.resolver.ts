import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IngredientsService } from '../api/services';
import { UnitsOfMeasurementList } from '../api/models';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class UnitOfMeasurementResolver implements Resolve<UnitsOfMeasurementList> {

    constructor(
        private ingredientsService: IngredientsService,
        protected localStorage: LocalStorage) { }

    resolve(route: ActivatedRouteSnapshot): Observable<UnitsOfMeasurementList> {

        return this.localStorage.getItem<UnitsOfMeasurementList>('units_of_measurement').pipe(
            mergeMap((list: UnitsOfMeasurementList) => {

                if (!list || list.length === 0) {

                    return this.ingredientsService.getIngredientsUnitsofmeasurement().pipe(
                        mergeMap(resultList => {
                            this.localStorage.setItem('units_of_measurement', resultList);
                            return of(resultList);
                        })
                    );
                }

                return of(list);
            })
        );
    }
}
