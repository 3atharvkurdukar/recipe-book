import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pani Puri',
      'Pani puri recipe',
      'http://cdn1.foodviva.com/static-content/food-images/snacks-recipes/pani-puri/pani-puri.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
