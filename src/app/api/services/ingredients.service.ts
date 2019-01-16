/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Ingredients } from '../models/ingredients';
import { UnitsOfMeasurementList } from '../models/units-of-measurement-list';
@Injectable({
  providedIn: 'root',
})
class IngredientsService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param recipeId undefined
   * @return Successful
   */
  getIngredientsResponse(recipeId?: Array<number>): __Observable<__StrictHttpResponse<Ingredients>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (recipeId || []).forEach(val => {if (val != null) __params = __params.append('recipeId', val.toString())});
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ingredients`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Ingredients>;
      })
    );
  }
  /**
   * @param recipeId undefined
   * @return Successful
   */
  getIngredients(recipeId?: Array<number>): __Observable<Ingredients> {
    return this.getIngredientsResponse(recipeId).pipe(
      __map(_r => _r.body as Ingredients)
    );
  }

  /**
   * @return Successful
   */
  getIngredientsUnitsofmeasurementResponse(): __Observable<__StrictHttpResponse<UnitsOfMeasurementList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ingredients/units-of-measurement`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UnitsOfMeasurementList>;
      })
    );
  }
  /**
   * @return Successful
   */
  getIngredientsUnitsofmeasurement(): __Observable<UnitsOfMeasurementList> {
    return this.getIngredientsUnitsofmeasurementResponse().pipe(
      __map(_r => _r.body as UnitsOfMeasurementList)
    );
  }
}

module IngredientsService {
}

export { IngredientsService }
