import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesPageComponent } from './components/recipes-page/recipes-page.component';
import { RecipeDetailPageComponent } from './components/recipe-detail-page/recipe-detail-page.component';
import { RecipesResolver, RecipeDetailResolver } from './resolvers';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesPageComponent,
    resolve: {
      recipes: RecipesResolver
    }
  },
  {
    path: 'recipes/:id',
    component: RecipeDetailPageComponent,
    resolve: {
      recipe: RecipeDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
