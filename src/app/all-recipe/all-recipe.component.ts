import { Component, OnInit } from '@angular/core';
import Recipy from 'src/models/Recipy';
import User from 'src/models/User';
import { RecipeServiceTsService } from 'src/services/recipe.service.ts.service';

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.css']
})
export class AllRecipeComponent implements OnInit {
recipies:Recipy[];
user:User;
  constructor(public RecipeService:RecipeServiceTsService) { 
    this.RecipeService.getAllRecipes().subscribe(r => {
      this.recipies = r;
      console.log(r);
  });
  }
  
  ngOnInit(): void {
  }

}
