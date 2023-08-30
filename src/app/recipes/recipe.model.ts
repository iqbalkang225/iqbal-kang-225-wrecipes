import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  private id: number;
  private name: string;
  private description: string;
  private image: string;
  private ingredients: Ingredient[];

  constructor(
    id: number,
    name: string,
    desc: string,
    image: string,
    ingredients: Ingredient[]
  ) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.image = image;
    this.ingredients = ingredients;
  }

  get getId() {
    return this.id;
  }

  get getName() {
    return this.name;
  }

  get getDescription() {
    return this.description;
  }

  get getImage() {
    return this.image;
  }

  get getIngredients() {
    return this.ingredients;
  }
}
