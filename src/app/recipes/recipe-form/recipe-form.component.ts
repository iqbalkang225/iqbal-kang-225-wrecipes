import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';
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
    private router: Router,
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.isEditing = this.route.snapshot.params.id !== undefined && true;
    this.id = this.route.snapshot.params.id;

    this.initForm();
  }

  private initForm() {
    let name = '';
    let image = '';
    let description = '';
    let recipeIngredients = new FormArray([]);

    if (this.isEditing) {
      const recipe = this.recipesService.getSingleRecipe(this.id);

      name = recipe.getName;
      image = recipe.getImage;
      description = recipe.getDescription;

      if (!recipe?.getIngredients) return;

      recipe.getIngredients.forEach((ingredient: Ingredient) => {
        recipeIngredients.push(
          new FormGroup({
            name: new FormControl(ingredient.getName, Validators.required),
            amount: new FormControl(ingredient.getAmount, [
              Validators.required,
              Validators.min(1),
            ]),
          })
        );
      });
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      image: new FormControl(image, Validators.required),
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
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.min(1)]),
      })
    );
  }

  onSubmit() {
    const newRecipe = this.recipeForm.value;

    if (this.isEditing) this.recipesService.updateRecipe(this.id, newRecipe);
    else {
      // this.recipesService.addRecipe(newRecipe);
      this.httpService.saveDataInFirebase(newRecipe);
    }
  }

  onCancel() {
    let path;
    const totalRecipes = this.recipesService.totalRecipes();
    if (totalRecipes > 0) path = this.recipesService.getRecipes[0].getId;
    else path = 'empty';

    this.isEditing = false;
    this.router.navigate(['recipes', this.id || path]);
  }
}
