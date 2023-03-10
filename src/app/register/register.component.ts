import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import User from 'src/models/User';
import { UserService } from 'src/app/services/user.service';
import { Output, EventEmitter } from '@angular/core';
import { LocalStrageService } from '../services/local-strage.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  name: string;
  user:User=new User(1,null,null,null,null)
  users:User[];
  exist:boolean=false;
 service:UserService;
//  @Output()
//  itemEvent = new EventEmitter<User>();
  constructor(public Active: ActivatedRoute,public UserService:UserService,public localStorage:LocalStrageService) {
    this.Active.params.subscribe(par => {
      //par- אובייקט שמכיל את כל הפרטמרטים שנשלחו לניתוב זה כאובייקט
      this.name = par.name;
      console.log(this.name);
    })  
    this.service=UserService;
  //  this.UserService.getAllUsers().subscribe(r => {
  //     this.users = r;
  //     console.log(r);
  // })
}
  save(form)
  {
    // if(this.users.find(u=>u==this.user))
    //      this.exist=true; 
    this.service.Register(this.user).subscribe(r=>{
      if(r==true)
          alert("your password is wrong")
      else 
      {
        this.localStorage.currentUser.next(this.user);
        this.localStorage.setInStorage(this.user)
      }
        });
  }
}
