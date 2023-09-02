import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnInit {
  id: number;
  isEditing = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.isEditing = this.route.snapshot.params.id !== undefined && true;
    this.id = this.route.snapshot.params.id;

    this.initForm();
  }

  private initForm() {
    let name = '';
    let imageUrl = '';
    let description = '';
    let recipeIngredients = new FormArray([]);

    if (this.isEditing) {
      const recipe = this.recipesService.getSingleRecipe(this.id);

      name = recipe.getName;
      imageUrl = recipe.getImage;
      description = recipe.getDescription;

      if (!recipe?.getIngredients) return;

      recipe.getIngredients.forEach((ingredient: Ingredient) => {
        recipeIngredients.push(
          new FormGroup({
            ingredientName: new FormControl(
              ingredient.getName,
              Validators.required
            ),
            ingredientAmount: new FormControl(ingredient.getAmount, [
              Validators.required,
              Validators.min(1),
            ]),
          })
        );
      });
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      imageUrl: new FormControl(imageUrl, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onIngredientAdd() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        ingredientName: new FormControl(null, Validators.required),
        ingredientAmount: new FormControl(null, [
          Validators.required,
          Validators.min(1),
        ]),
      })
    );
  }

  onSubmit() {
    console.log(this.recipeForm);
  }
}
