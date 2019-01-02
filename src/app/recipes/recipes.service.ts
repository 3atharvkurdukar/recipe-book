import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pani Puri',
      'Pani puri recipe',
      'http://cdn1.foodviva.com/static-content/food-images/snacks-recipes/pani-puri/pani-puri.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }



}
