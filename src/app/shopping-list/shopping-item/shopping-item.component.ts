import { Component, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
})
export class ShoppingItemComponent {
  @Input() ingredient: Ingredient;
}
