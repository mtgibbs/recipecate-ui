import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { recipeResolver } from './recipe.resolver';

export const routes: Routes = [
    {
        path: 'recipes',
        component: RecipeListComponent,
        resolve: { recipes: recipeResolver }
    },
];
