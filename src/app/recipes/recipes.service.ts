import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      'lean ground turkey 1',
      'Sit pariatur velit labore consequat sit ut.',
      'https://www.harmonsgrocery.com/app/uploads/2020/09/Traditional_Turkey_Meal.jpg'
    ),
    new Recipe(
      'lean ground turkey 2',
      'Sit pariatur velit labore consequat sit ut.',
      'https://www.harmonsgrocery.com/app/uploads/2020/09/Traditional_Turkey_Meal.jpg'
    ),
    new Recipe(
      'lean ground turkey 3',
      'Sit pariatur velit labore consequat sit ut.',
      'https://www.harmonsgrocery.com/app/uploads/2020/09/Traditional_Turkey_Meal.jpg'
    ),
    new Recipe(
      'lean ground turkey 4',
      'Sit pariatur velit labore consequat sit ut.',
      'https://www.harmonsgrocery.com/app/uploads/2020/09/Traditional_Turkey_Meal.jpg'
    ),
    new Recipe(
      'lean ground turkey 5',
      'Sit pariatur velit labore consequat sit ut.',
      'https://www.harmonsgrocery.com/app/uploads/2020/09/Traditional_Turkey_Meal.jpg'
    ),
  ];

  // currentlySelectedRecipe = new EventEmitter<Recipe>();
  currentlySelectedRecipe: Recipe;

  get getRecipes() {
    return [...this.recipes];
  }
}
