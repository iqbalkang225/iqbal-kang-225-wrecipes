import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'lean ground turkey 1',
      'Sit pariatur velit labore consequat sit ut.',
      'https://www.harmonsgrocery.com/app/uploads/2020/09/Traditional_Turkey_Meal.jpg',
      [
        new Ingredient('tomato', 23, false),
        new Ingredient('onion', 2, false),
        new Ingredient('chilly', 13, false),
        new Ingredient('sausage', 14, false),
        new Ingredient('meat', 1, false),
      ]
    ),
    new Recipe(
      2,
      'lean ground turkey 2',
      'Sit pariatur velit labore consequat sit ut.',
      'https://www.harmonsgrocery.com/app/uploads/2020/09/Traditional_Turkey_Meal.jpg',
      [
        new Ingredient('mango', 23, false),
        new Ingredient('banana', 2, false),
        new Ingredient('grape', 13, false),
        new Ingredient('kiwi', 14, false),
        new Ingredient('pineapple', 1, false),
      ]
    ),
    new Recipe(
      3,
      'lean ground turkey 3',
      'Sit pariatur velit labore consequat sit ut.',
      'https://www.harmonsgrocery.com/app/uploads/2020/09/Traditional_Turkey_Meal.jpg',
      [
        new Ingredient('tomato', 23, false),
        new Ingredient('onion', 2, false),
        new Ingredient('chilly', 13, false),
        new Ingredient('sausage', 14, false),
        new Ingredient('meat', 1, false),
      ]
    ),
    new Recipe(
      4,
      'lean ground turkey 4',
      'Sit pariatur velit labore consequat sit ut.',
      'https://www.harmonsgrocery.com/app/uploads/2020/09/Traditional_Turkey_Meal.jpg',
      [
        new Ingredient('mango', 23, false),
        new Ingredient('banana', 2, false),
        new Ingredient('grape', 13, false),
        new Ingredient('kiwi', 14, false),
        new Ingredient('pineapple', 1, false),
      ]
    ),
    new Recipe(
      5,
      'lean ground turkey 5',
      'Sit pariatur velit labore consequat sit ut.',
      'https://www.harmonsgrocery.com/app/uploads/2020/09/Traditional_Turkey_Meal.jpg',
      [
        new Ingredient('tomatos', 23, true),
        new Ingredient('onion', 2, false),
        new Ingredient('chilly', 13, false),
        new Ingredient('sausage', 14, false),
        new Ingredient('meat', 1, false),
      ]
    ),
    new Recipe(
      6,
      'lean ground turkey 6',
      'Sit pariatur velit labore consequat sit ut.',
      'https://www.harmonsgrocery.com/app/uploads/2020/09/Traditional_Turkey_Meal.jpg',
      [
        new Ingredient('mango', 23, false),
        new Ingredient('banana', 2, false),
        new Ingredient('grape', 13, false),
        new Ingredient('kiwi', 14, false),
        new Ingredient('pineapple', 1, false),
      ]
    ),
  ];

  get getRecipes() {
    return [...this.recipes];
  }

  getSingleRecipe(id: number) {
    return this.recipes.find((recipe: Recipe) => recipe.getId === +id);
  }
}
