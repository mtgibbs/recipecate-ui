/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MealPlans } from '../models/meal-plans';
import { MealPlanDetails } from '../models/meal-plan-details';
import { MeasuredIngredientsList } from '../models/measured-ingredients-list';
import { AddMealPlanRequest } from '../models/add-meal-plan-request';
@Injectable({
  providedIn: 'root',
})
class MealplanService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Successful
   */
  getMealplanResponse(): __Observable<__StrictHttpResponse<MealPlans>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/mealplan`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MealPlans>;
      })
    );
  }
  /**
   * @return Successful
   */
  getMealplan(): __Observable<MealPlans> {
    return this.getMealplanResponse().pipe(
      __map(_r => _r.body as MealPlans)
    );
  }

  /**
   * @param id undefined
   * @return Successful
   */
  getMealplanIdDetailResponse(id: number): __Observable<__StrictHttpResponse<MealPlanDetails>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/mealplan/${id}/detail`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MealPlanDetails>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Successful
   */
  getMealplanIdDetail(id: number): __Observable<MealPlanDetails> {
    return this.getMealplanIdDetailResponse(id).pipe(
      __map(_r => _r.body as MealPlanDetails)
    );
  }

  /**
   * @param id undefined
   * @return Successful
   */
  getMealplanIdShoppinglistResponse(id: number): __Observable<__StrictHttpResponse<MeasuredIngredientsList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/mealplan/${id}/shoppinglist`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MeasuredIngredientsList>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Successful
   */
  getMealplanIdShoppinglist(id: number): __Observable<MeasuredIngredientsList> {
    return this.getMealplanIdShoppinglistResponse(id).pipe(
      __map(_r => _r.body as MeasuredIngredientsList)
    );
  }

  /**
   * @param body undefined
   */
  postMealplanAddResponse(body?: AddMealPlanRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/mealplan/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param body undefined
   */
  postMealplanAdd(body?: AddMealPlanRequest): __Observable<null> {
    return this.postMealplanAddResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module MealplanService {
}

export { MealplanService }
