import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesPageComponent } from './components/recipes-page/recipes-page.component';
import { RecipeDetailPageComponent } from './components/recipe-detail-page/recipe-detail-page.component';
import {
  RecipesResolver,
  RecipeDetailResolver,
  MealPlansResolver,
  MealPlanDetailResolver,
  MealPlanShoppingListIngredientResolver
} from './resolvers';
import { MealPlansPageComponent } from './components/meal-plans-page/meal-plans-page.component';
import { MealPlanDetailPageComponent } from './components/meal-plan-detail-page/meal-plan-detail-page.component';
import { MealPlanShoppingListPageComponent } from './components/meal-plan-shopping-list-page/meal-plan-shopping-list-page.component';

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
  },
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
    path: 'mealplans/:id/shoppinglist',
    component: MealPlanShoppingListPageComponent,
    resolve: {
      mealPlan: MealPlanDetailResolver,
      ingredients: MealPlanShoppingListIngredientResolver,
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
