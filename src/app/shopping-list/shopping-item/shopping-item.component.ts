import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
})
export class ShoppingItemComponent {
  @ViewChild('template', { static: true }) template;
  @Input() ingredient: Ingredient;
  @Input() index: number;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

  onEdit(index: number) {
    this.shoppingListService.editIngredintIndex.next(index);
  }
}
