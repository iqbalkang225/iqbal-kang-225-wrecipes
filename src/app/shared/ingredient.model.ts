export class Ingredient {
  private name: string;
  private amount: number;
  private inShoppingList?: boolean;

  constructor(name: string, amount: number, inShoppingList?: boolean) {
    this.name = name;
    this.amount = amount;
    this.inShoppingList = inShoppingList || null;
  }

  get getName() {
    return this.name;
  }

  get getAmount() {
    return this.amount;
  }

  set setAmount(value: number) {
    this.amount = value;
  }

  get getInShoppingList() {
    return this.inShoppingList;
  }

  set setInShoppingList(value: boolean) {
    this.inShoppingList = value;
  }
}
