import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Category from 'src/models/Category';
import Recipy from 'src/models/Recipy';
import User from 'src/models/User';
import { CategoryService } from './services/category.services.service';
import { LocalStrageService } from './services/local-strage.service';
import { RecipeServiceTsService } from './services/recipe.service.ts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'Recipies';
  /**
   *
   */
  sub: Subscription;
  userName:string = "guest";
 
  constructor(public localStorage:LocalStrageService) {
    
}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    // console.log(Object.keys(this.u))
    this.localStorage.currentUser.next(this.localStorage.getFromStorage())
    this.sub = this.localStorage.currentUser.subscribe(data => {console.log(data); 
      this.userName = data ? data.Name : "guest" })
}
  logOut() {
    this.localStorage.currentUser.next(null);
    this.localStorage.removeFromStorage();
  }
  save()
  {
    // console.log(this.category,"dfghj",this.recipeName)
    // if(this.recipeName!=undefined)
    
  }
}
