import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { RecipesService } from 'src/app/recipes/recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes;

    this.recipesService.recipiesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
      this.router.navigate(['recipes', recipes.length]);
    });
  }

  onAddRecipe() {
    this.authService.user$.pipe(take(1)).subscribe((user) => {
      if (!user) return this.router.navigate(['/auth']);
      else this.router.navigate(['new'], { relativeTo: this.route });
    });
  }
}
