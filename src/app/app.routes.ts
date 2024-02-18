import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { recipeResolver } from './recipe.resolver';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { shoppingListResolver } from './shopping-list.resolver';

export const routes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes',
        component: RecipeListComponent,
        resolve: { recipes: recipeResolver }
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent,
        resolve: { shoppingList: shoppingListResolver },
        
    }
];
