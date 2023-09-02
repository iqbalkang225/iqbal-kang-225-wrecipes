import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css'],
})
export class ShoppingFormComponent implements OnInit, OnDestroy {
  @ViewChild('form') form: NgForm;
  subscription: Subscription;
  editMode = false;
  index: number;
  selectedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.editIngredintIndex.subscribe(
      (index: number) => {
        this.editMode = true;
        this.index = index;

        this.selectedIngredient =
          this.shoppingListService.getSingleIngredient(index);

        this.form.setValue({
          name: this.selectedIngredient.getName,
          amount: this.selectedIngredient.getAmount,
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onIngAdd(form: NgForm) {
    const name: string = form.value.name;
    const amount: number = form.value.amount;

    const newIngredient = new Ingredient(name, amount);

    if (this.editMode)
      this.shoppingListService.onEditIngredient(this.index, newIngredient);
    else this.shoppingListService.onIngredientAdd(newIngredient);

    this.resetForm();
  }

  onIngDelete() {
    if (this.editMode) this.shoppingListService.onDeleteIngredient(this.index);

    this.resetForm();
  }

  resetForm() {
    this.form.reset();
    this.index = null;
    this.editMode = false;
    this.selectedIngredient = null;
  }
}
