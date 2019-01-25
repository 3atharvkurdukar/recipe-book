import { RecipesService } from './../recipes/recipes.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipesService: RecipesService) { }

  storeRecipes() {
    return this.http.put('https://atharv-recipe-book.firebaseio.com/recipes.json', this.recipesService.getRecipes());
  }

  fetchRecipes() {
    this.http.get('https://atharv-recipe-book.firebaseio.com/recipes.json').subscribe(
      (response: Response) => {
        const recipes = response.json();
        this.recipesService.setRecipes(recipes);
      }
    );
  }
}
