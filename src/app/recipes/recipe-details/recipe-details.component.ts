import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  selectedRecipe: Recipe;
  allSelected = false;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipesService: RecipesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // const selectedRecipeId = this.route.snapshot.params.id;
    // this.selectedRecipe = this.recipesService.getSingleRecipe(selectedRecipeId);

    this.route.params.subscribe((params: Params) => {
      this.selectedRecipe = this.recipesService.getSingleRecipe(+params.id);
    });
  }

  selectAll() {
    this.selectedRecipe.getIngredients.forEach(
      (ingredient) => (ingredient.setInShoppingList = true)
    );
    this.allSelected = true;
  }

  deSelectAll() {
    this.selectedRecipe.getIngredients.forEach(
      (ingredient) => (ingredient.setInShoppingList = false)
    );
    this.allSelected = false;
  }

  toggleIngredient(ing: Ingredient) {
    ing.setInShoppingList = !ing.getInShoppingList;

    const atLeastOneNotInShoppingList = this.selectedRecipe.getIngredients.some(
      (ing: Ingredient) => ing.getInShoppingList === false
    );
    if (atLeastOneNotInShoppingList) this.allSelected = false;
    else this.allSelected = true;
  }

  addToShoppingList() {
    const selectedIngrdients = this.selectedRecipe.getIngredients.filter(
      (ing) => ing.getInShoppingList === true
    );
    this.shoppingListService.onIngredientsAddFromDetails(selectedIngrdients);
  }
}
