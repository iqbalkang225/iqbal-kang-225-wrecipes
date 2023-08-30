import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css'],
})
export class ShoppingFormComponent {
  @ViewChild('ingredientNameInput') ingredientNameInput: ElementRef;
  @ViewChild('ingredientAmountInput') ingredientAmountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onIngAdd() {
    const name: string = this.ingredientNameInput.nativeElement.value;
    const amount: number = +this.ingredientAmountInput.nativeElement.value;

    const newIngredient = new Ingredient(name, amount);
    this.shoppingListService.onIngredientAdd(newIngredient);
  }
}
