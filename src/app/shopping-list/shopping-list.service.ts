import { Ingredient } from './../shared/ingredient.model';
import { Subject} from 'rxjs';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 2),
    new Ingredient('Potatoes', 5)
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

}
