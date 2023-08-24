import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HeaderHeroComponent } from './header/header-hero/header-hero.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingFormComponent } from './shopping-list/shopping-form/shopping-form.component';
import { FormsModule } from '@angular/forms';
import { ShoppingItemComponent } from './shopping-list/shopping-item/shopping-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HeaderHeroComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingFormComponent,
    ShoppingItemComponent,
  ],
  imports: [BrowserModule, MatIconModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
