import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-select',
  templateUrl: './recipe-select.component.html',
  styleUrls: ['./recipe-select.component.css'],
})
export class RecipeSelectComponent implements OnInit {
  totalRecipes: number;
  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.totalRecipes = this.recipeService.totalRecipes();
  }
}
