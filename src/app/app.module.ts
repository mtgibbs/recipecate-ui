import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesPageComponent } from './components/recipes-page/recipes-page.component';
import { ApiModule } from './api/api.module';
import { AngularMaterialModule } from './shared/angular-material.module';
import { RecipeDetailPageComponent } from './components/recipe-detail-page/recipe-detail-page.component';

import {
  RecipesResolver,
  RecipeDetailResolver,
  IngredientsResolver,
  MealPlanDetailResolver,
  MealPlansResolver,
  MealPlanShoppingListIngredientResolver,
  UnitOfMeasurementResolver
} from './resolvers';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MealPlansPageComponent } from './components/meal-plans-page/meal-plans-page.component';
import { MealPlanDetailPageComponent } from './components/meal-plan-detail-page/meal-plan-detail-page.component';
import { MealPlanCreateDialogComponent } from './components/meal-plan-create-dialog/meal-plan-create-dialog.component';
import { MealPlanCreateWizardComponent } from './components/meal-plan-create-wizard/meal-plan-create-wizard.component';
import { INIT_API_CONFIGURATION } from './api-config';
import { MealPlanShoppingListPageComponent } from './components/meal-plan-shopping-list-page/meal-plan-shopping-list-page.component';
import { RecipeCreateDialogComponent } from './components/recipe-create-dialog/recipe-create-dialog.component';
import { RecipeCreateFormComponent } from './components/recipe-create-form/recipe-create-form.component';
import { WebStorageModule } from 'ngx-store';

@NgModule({
  declarations: [
    AppComponent,
    RecipesPageComponent,
    RecipeDetailPageComponent,
    RecipeCreateFormComponent,
    MealPlansPageComponent,
    MealPlanDetailPageComponent,
    MealPlanCreateDialogComponent,
    MealPlanCreateWizardComponent,
    MealPlanShoppingListPageComponent,
    RecipeCreateDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    WebStorageModule
  ],
  providers: [
    INIT_API_CONFIGURATION,
    RecipesResolver,
    RecipeDetailResolver,
    IngredientsResolver,
    MealPlanDetailResolver,
    MealPlansResolver,
    MealPlanShoppingListIngredientResolver,
    UnitOfMeasurementResolver
  ],
  entryComponents: [
    MealPlanCreateDialogComponent,
    RecipeCreateDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


