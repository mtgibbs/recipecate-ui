import { Ingredient, UnitsOfMeasurementList } from 'src/app/api/models';

export interface RecipeCreateDialogData {
    ingredients: Ingredient[];
    unitOfMeasurementList: UnitsOfMeasurementList;
}
