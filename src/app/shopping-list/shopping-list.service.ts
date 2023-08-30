import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('orange', 2),
    new Ingredient('mango', 12),
    new Ingredient('tomato', 3),
    new Ingredient('kiwi', 6),
    new Ingredient('banana', 9),
    new Ingredient('peach', 11),
  ];

  updatedIngredients = new EventEmitter<Ingredient[]>();

  get getIngredients() {
    return [...this.ingredients];
  }

  onIngredientAdd(ingredient: Ingredient) {
    this.checkIfIngredientPresentAndUpdate(ingredient);
    this.updatedIngredients.emit(this.getIngredients);
  }

  onIngredientsAddFromDetails(ings: Ingredient[]) {
    ings.forEach((ing) => {
      this.checkIfIngredientPresentAndUpdate(ing);
    });
  }

  checkIfIngredientPresentAndUpdate(ing: Ingredient) {
    const index = this.ingredients.findIndex(
      (ingredient) => ingredient.getName === ing.getName
    );

    // if ingredient not in list then add it and return
    if (index === -1) return this.ingredients.push(ing);

    // if ingredient is already there then increase the already present ingredient amount
    this.ingredients[index].setAmount =
      this.ingredients[index].getAmount + ing.getAmount;
  }
}
