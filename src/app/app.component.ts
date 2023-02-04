import { Component } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipies';
  /**
   *
   */
  constructor() {
    
    
  }
  // user:User;
  // setUser(u: User) {
  //   this.user=u;
  // }
}
