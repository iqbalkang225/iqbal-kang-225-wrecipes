import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()
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

  constructor(private router: Router) {}

  recipiesChanged = new Subject<Recipe[]>();

  get getRecipes() {
    return [...this.recipes];
  }

  getSingleRecipe(id: number) {
    console.log(
      this.recipes.find((recipe: Recipe) => recipe.getId === +id)
        .getIngredients[0]
    );
    return this.recipes.find((recipe: Recipe) => recipe.getId === +id);
  }

  addRecipe(recipe) {
    const id = this.recipes.length + 1;
    const newRecipe = this.makeRecipeObject(recipe, id);

    this.recipes.push(newRecipe);
    this.recipiesChanged.next(this.getRecipes);
  }

  updateRecipe(index: number, recipe: Recipe) {
    const newRecipe = this.makeRecipeObject(recipe, index);

    this.recipes[index - 1] = newRecipe;
    this.recipiesChanged.next(this.getRecipes);
  }

  makeRecipeObject(recipe, id) {
    const { name, image, description, ingredients } = recipe;

    const ingredientsArr = this.makeIngredientsObject(ingredients);
    return new Recipe(+id, name, description, image, ingredientsArr);
  }

  makeIngredientsObject(ingredients) {
    const ingredientArr = [];
    for (let ingredient of ingredients) {
      const { name, amount } = ingredient;

      ingredientArr.push(new Ingredient(name, amount));
    }
    return ingredientArr;
  }

  deleteRecipe(index: number) {
    this.recipes = this.recipes.filter(
      (recipe: Recipe) => recipe.getId !== index
    );
    this.recipiesChanged.next(this.getRecipes);
    this.homePageRecipe();
  }

  homePageRecipe() {
    const totalRecipes = this.totalRecipes();
    if (totalRecipes > 0)
      return this.router.navigate(['recipes', this.recipes[0].getId]);
    else this.router.navigate(['recipes']);
  }

  totalRecipes() {
    return this.recipes.length;
  }
}
