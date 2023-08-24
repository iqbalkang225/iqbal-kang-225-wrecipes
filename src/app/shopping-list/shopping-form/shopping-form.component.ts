import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css'],
})
export class ShoppingFormComponent {
  @ViewChild('ingredientNameInput') ingredientNameInput: ElementRef;
  @ViewChild('ingredientAmountInput') ingredientAmountInput: ElementRef;
  @Output() ingredientAddCustomEvent = new EventEmitter<Ingredient>();

  onIngredientAdd() {
    const name: string = this.ingredientNameInput.nativeElement.value;
    const amount: number = +this.ingredientAmountInput.nativeElement.value;

    const newIngredient = new Ingredient(name, amount);
    this.ingredientAddCustomEvent.emit(newIngredient);
  }
}
