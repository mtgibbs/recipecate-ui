import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesPageComponent } from './components/recipes-page/recipes-page.component';
import { ApiModule } from './api/api.module';
import { AngularMaterialModule } from './shared/angular-material.module';
import { RecipeDetailPageComponent } from './components/recipe-detail-page/recipe-detail-page.component';
import { RecipesResolver, RecipeDetailResolver } from './resolvers';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RecipesPageComponent,
    RecipeDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    RecipesResolver,
    RecipeDetailResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
