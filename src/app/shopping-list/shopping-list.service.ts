import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('orange', 2),
    new Ingredient('mango', 12),
    new Ingredient('tomato', 3),
    new Ingredient('kiwi', 6),
    new Ingredient('banana', 9),
    new Ingredient('peach', 11),
  ];

  onIngredientAdd(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
