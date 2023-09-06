import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { RecipesService } from '../recipes/recipes.service';

const FIREBASE_URL = `https://wrecipes-2ed1e-default-rtdb.firebaseio.com/recipes`;

const fireBaseUrl = (id?: string) => {
  if (!id) return `${FIREBASE_URL}.json`;
  else return `${FIREBASE_URL}/${id}.json`;
};

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private recipesService: RecipesService,
    private http: HttpClient
  ) {}

  saveDataInFirebase(recipe: Recipe) {
    this.http
      .post<{ name: string }>(fireBaseUrl(), recipe)
      .subscribe((data) => {
        this.getDatafromFirebase(data.name);
      });
  }

  getDatafromFirebase(name) {
    this.http.get(fireBaseUrl(name)).subscribe((data) => {
      this.recipesService.addRecipe(data);
    });
  }
}
