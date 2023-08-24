export class Ingredient {
  private name: string;
  private amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }

  get getName() {
    return this.name;
  }

  get getAmount() {
    return this.amount;
  }
}
