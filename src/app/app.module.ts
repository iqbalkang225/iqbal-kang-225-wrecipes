import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ShoppingItemComponent } from './shopping-list/shopping-item/shopping-item.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeFormComponent } from './recipes/recipe-form/recipe-form.component';
import { RecipesService } from './recipes/recipes.service';
import { RecipeSelectComponent } from './recipes/recipe-select/recipe-select.component';

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
    RecipeFormComponent,
    RecipeSelectComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
