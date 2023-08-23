export class Recipe {
  private name: string;
  private description: string;
  private image: string;

  constructor(name: string, desc: string, image: string) {
    this.name = name;
    this.description = desc;
    this.image = image;
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
}
