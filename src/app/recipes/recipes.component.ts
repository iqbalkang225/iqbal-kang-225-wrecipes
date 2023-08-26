import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService],
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  constructor(private recipesService: RecipesService) {}

  // ngOnInit(): void {
  //   this.recipesService.currentlySelectedRecipe.subscribe(
  //     (recipe: Recipe) => (this.selectedRecipe = recipe)
  //   );
  // }

  ngDoCheck() {
    // this.ingredients=this.shoppingListService.getIngredients();
    this.selectedRecipe = this.recipesService.currentlySelectedRecipe;
  }
}
