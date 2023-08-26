import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipesService } from 'src/app/recipes/recipes.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input('currentRecipe') recipe: Recipe;

  constructor(private recipeService: RecipesService) {}

  onRecipeSelect() {
    // this.recipeService.currentlySelectedRecipe.emit(this.recipe);
    this.recipeService.currentlySelectedRecipe = this.recipe;
  }
}
