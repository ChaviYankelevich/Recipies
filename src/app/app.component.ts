import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Recipy from 'src/models/Recipy';
import User from 'src/models/User';
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
  userName:string = "guest"
  constructor(public localStorage:LocalStrageService) {
   
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.localStorage.currentUser.next(this.localStorage.getFromStorage())
    this.sub = this.localStorage.currentUser.subscribe(data => { this.userName = data ? data.Name : "guest" })
  }
  logOut() {
    this.localStorage.currentUser.next(null);
    this.localStorage.removeFromStorage();
  }
}
