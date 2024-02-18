export * from './ingredients.service';
import { IngredientsService } from './ingredients.service';
export * from './recipes.service';
import { RecipesService } from './recipes.service';
export * from './unitOfMeasure.service';
import { UnitOfMeasureService } from './unitOfMeasure.service';
export const APIS = [IngredientsService, RecipesService, UnitOfMeasureService];
