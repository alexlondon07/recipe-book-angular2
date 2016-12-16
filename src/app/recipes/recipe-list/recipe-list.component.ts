import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe';
import {RecipesItemComponent} from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe =  new Recipe('Fruit', 'Fruit', 'http://runrun.es/wp-content/uploads/2014/09/1-1.jpg');
  
  
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
