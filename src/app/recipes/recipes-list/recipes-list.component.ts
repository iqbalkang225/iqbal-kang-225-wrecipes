import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent {
  recipes: Recipe[] = [
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
  @Output() onRecipeSelectCustomEvent = new EventEmitter<Recipe>();

  constructor() {}

  onRecipeSelect(recipe: Recipe) {
    this.onRecipeSelectCustomEvent.emit(recipe);
  }
}
