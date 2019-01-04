import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesPageComponent } from './components/recipes-page/recipes-page.component';
import { ApiModule } from './api/api.module';
import { AngularMaterialModule } from './shared/angular-material.module';
import { RecipeDetailPageComponent } from './components/recipe-detail-page/recipe-detail-page.component';
import { RecipesResolver, RecipeDetailResolver, IngredientsResolver, MealPlanDetailResolver, MealPlansResolver } from './resolvers';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeCreatePageComponent } from './components/recipe-create-page/recipe-create-page.component';
import { MealPlansPageComponent } from './components/meal-plans-page/meal-plans-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesPageComponent,
    RecipeDetailPageComponent,
    RecipeCreatePageComponent,
    MealPlansPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    RecipesResolver,
    RecipeDetailResolver,
    IngredientsResolver,
    MealPlanDetailResolver,
    MealPlansResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
