import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Recipy from 'src/models/Recipy';
import User from 'src/models/User';
import { RecipeServiceTsService } from 'src/app/services/recipe.service.ts.service';

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.css']
})
export class AllRecipeComponent implements OnInit {
recipies:Recipy[]=[];
user:User;
recipe:Recipy;
  constructor(public RecipeService:RecipeServiceTsService,public Active: ActivatedRoute) { 
    this.RecipeService.getAllRecipes().subscribe(r => {
      this.recipies = r;
      console.log(r);
  });
  this.Active.params.subscribe(par => {
    if(par.recipe==null)
    return;
        this.recipe = par.recipe;
        console.log(this.recipe,"all recipe");
        this.recipies.push(this.recipe);
      })  
  }

  ngOnInit(): void {
  }

}
