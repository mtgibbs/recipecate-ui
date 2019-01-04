import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesPageComponent } from './components/recipes-page/recipes-page.component';
import { RecipeDetailPageComponent } from './components/recipe-detail-page/recipe-detail-page.component';
import { RecipesResolver, RecipeDetailResolver, IngredientsResolver, MealPlansResolver, MealPlanDetailResolver } from './resolvers';
import { RecipeCreatePageComponent } from './components/recipe-create-page/recipe-create-page.component';
import { MealPlansPageComponent } from './components/meal-plans-page/meal-plans-page.component';
import { MealPlanDetailPageComponent } from './components/meal-plan-detail-page/meal-plan-detail-page.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesPageComponent,
    resolve: {
      recipes: RecipesResolver
    }
  },
  {
    path: 'recipes/new',
    component: RecipeCreatePageComponent,
    resolve: {
      ingredients: IngredientsResolver
    }
  },
  {
    path: 'recipes/:id',
    component: RecipeDetailPageComponent,
    resolve: {
      recipe: RecipeDetailResolver
    }
  },
  // {
  //   path: 'mealplan/new',

  // }
  {
    path: 'mealplans',
    component: MealPlansPageComponent,
    resolve: {
      mealPlans: MealPlansResolver
    }
  },
  {
    path: 'mealplans/:id',
    component: MealPlanDetailPageComponent,
    resolve: {
      mealPlan: MealPlanDetailResolver
    }
  },
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
