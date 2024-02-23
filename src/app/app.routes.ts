import { Routes } from '@angular/router';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { recipesResolver } from './resolvers/recipes.resolver';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { shoppingListResolver } from './resolvers/shopping-list.resolver';

export const routes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes',
        component: RecipeListComponent,
        resolve: { recipes: recipesResolver }
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent,
        resolve: { shoppingList: shoppingListResolver },
    }
];
