import { Recipe } from './../recipes/recipe.model';
import { RecipesService } from './../recipes/recipes.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipesService: RecipesService) { }

  storeRecipes() {
    return this.http.put('https://atharv-recipe-book.firebaseio.com/recipes.json', this.recipesService.getRecipes());
  }

  fetchRecipes() {
    this.http.get('https://atharv-recipe-book.firebaseio.com/recipes.json')
      .pipe(
        map((response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredient'] = [];
            }
          }
          return recipes;
        })
      ).subscribe(
      (recipes: Recipe[]) => {
        this.recipesService.setRecipes(recipes);
      }
    );
  }
}
