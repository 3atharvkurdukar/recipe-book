import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pani Puri',
      'Pani puri is a tangy, spicy as ell as sweet food. It is one of the most beloved street food in India.',
      'http://cdn1.foodviva.com/static-content/food-images/snacks-recipes/pani-puri/pani-puri.jpg',
      [
        new Ingredient('Potato', 3),
        new Ingredient('Onion', 1),
        new Ingredient('Mint', 20),
        new Ingredient('Green Chilli', 8)
      ]
    ),
    new Recipe(
      'Pav Bhaji',
      'Pav Bhaji is an iconic dish from Mumbai and famous all over India',
      'https://www.merisaheli.com/wp-content/uploads/2016/11/pav-bhaji-e1528959679489.jpg',
      [
        new Ingredient('Potato', 3),
        new Ingredient('Onion', 2),
        new Ingredient('Tomato', 2),
        new Ingredient('Butter', 1)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
