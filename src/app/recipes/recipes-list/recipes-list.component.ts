import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'lean ground turkey',
      'Sit pariatur velit labore consequat sit ut.',
      'https://www.harmonsgrocery.com/app/uploads/2020/09/Traditional_Turkey_Meal.jpg'
    ),
    new Recipe(
      'lean ground turkey',
      'Sit pariatur velit labore consequat sit ut.',
      'https://www.harmonsgrocery.com/app/uploads/2020/09/Traditional_Turkey_Meal.jpg'
    ),
    new Recipe(
      'lean ground turkey',
      'Sit pariatur velit labore consequat sit ut.',
      'https://www.harmonsgrocery.com/app/uploads/2020/09/Traditional_Turkey_Meal.jpg'
    ),
    new Recipe(
      'lean ground turkey',
      'Sit pariatur velit labore consequat sit ut.',
      'https://www.harmonsgrocery.com/app/uploads/2020/09/Traditional_Turkey_Meal.jpg'
    ),
    new Recipe(
      'lean ground turkey',
      'Sit pariatur velit labore consequat sit ut.',
      'https://www.harmonsgrocery.com/app/uploads/2020/09/Traditional_Turkey_Meal.jpg'
    ),
  ];

  constructor() {}
}
