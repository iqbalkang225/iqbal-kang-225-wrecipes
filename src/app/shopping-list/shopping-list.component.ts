import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
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
