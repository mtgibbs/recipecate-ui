/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

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
  getRecipesResponse(): __Observable<__StrictHttpResponse<Array<{id?: number, name?: string}>>> {
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
        return _r as __StrictHttpResponse<Array<{id?: number, name?: string}>>;
      })
    );
  }
  /**
   * @return Successful
   */
  getRecipes(): __Observable<Array<{id?: number, name?: string}>> {
    return this.getRecipesResponse().pipe(
      __map(_r => _r.body as Array<{id?: number, name?: string}>)
    );
  }

  /**
   * @param id undefined
   * @return Successful
   */
  getRecipesIdResponse(id: number): __Observable<__StrictHttpResponse<{id: number, name?: string, instructions?: string, ingredients?: Array<{id?: number, name?: string, amount?: number, unit_of_measurement?: string}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/recipes/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{id: number, name?: string, instructions?: string, ingredients?: Array<{id?: number, name?: string, amount?: number, unit_of_measurement?: string}>}>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Successful
   */
  getRecipesId(id: number): __Observable<{id: number, name?: string, instructions?: string, ingredients?: Array<{id?: number, name?: string, amount?: number, unit_of_measurement?: string}>}> {
    return this.getRecipesIdResponse(id).pipe(
      __map(_r => _r.body as {id: number, name?: string, instructions?: string, ingredients?: Array<{id?: number, name?: string, amount?: number, unit_of_measurement?: string}>})
    );
  }

  /**
   * @param body undefined
   */
  postRecipesAddResponse(body?: {name: string, instructions?: string, ingredients: Array<{name: string, amount: number, unit_of_measurement: string}>}): __Observable<__StrictHttpResponse<null>> {
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
  postRecipesAdd(body?: {name: string, instructions?: string, ingredients: Array<{name: string, amount: number, unit_of_measurement: string}>}): __Observable<null> {
    return this.postRecipesAddResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module RecipesService {
}

export { RecipesService }
