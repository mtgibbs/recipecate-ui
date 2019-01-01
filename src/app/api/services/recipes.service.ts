/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { RecipePageResponse } from '../models/recipe-page-response';
import { Recipe } from '../models/recipe';
import { RecipeRequest } from '../models/recipe-request';
@Injectable({
  providedIn: 'root',
})
class RecipesService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Successful
   */
  getRecipesResponse(): __Observable<__StrictHttpResponse<RecipePageResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/recipes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RecipePageResponse>;
      })
    );
  }
  /**
   * @return Successful
   */
  getRecipes(): __Observable<RecipePageResponse> {
    return this.getRecipesResponse().pipe(
      __map(_r => _r.body as RecipePageResponse)
    );
  }

  /**
   * @param id undefined
   * @return Successful
   */
  getRecipesIdDetailResponse(id: number): __Observable<__StrictHttpResponse<Recipe>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/recipes/${id}/detail`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Recipe>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Successful
   */
  getRecipesIdDetail(id: number): __Observable<Recipe> {
    return this.getRecipesIdDetailResponse(id).pipe(
      __map(_r => _r.body as Recipe)
    );
  }

  /**
   * @param body undefined
   */
  postRecipesAddResponse(body?: RecipeRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/recipes/add`,
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
  postRecipesAdd(body?: RecipeRequest): __Observable<null> {
    return this.postRecipesAddResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module RecipesService {
}

export { RecipesService }
