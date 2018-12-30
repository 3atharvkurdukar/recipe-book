import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, EventEmitter, ViewChild, ElementRef, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() addedIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      Number.parseInt(this.amountInputRef.nativeElement.value, 10)
    );
    this.addedIngredient.emit(newIngredient);
  }

}
