import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes/recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes;

    this.recipesService.recipiesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }
}
