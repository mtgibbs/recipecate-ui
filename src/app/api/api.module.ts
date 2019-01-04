/* tslint:disable */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';

import { IngredientsService } from './services/ingredients.service';
import { MealplanService } from './services/mealplan.service';
import { RecipesService } from './services/recipes.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    IngredientsService,
    MealplanService,
    RecipesService
  ],
})
export class ApiModule { }
