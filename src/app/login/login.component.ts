import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import User from "src/models/User"
// import { Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStrageService } from '../services/local-strage.service';
import {Form, FormControl,ReactiveFormsModule, Validators} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
name:string=null;
password:string=null;
users:User[];
u:User=new User(null,null,null,null,null);
service:UserService;
hide = true;
constructor(public userService:UserService,public act:Router,public localStorage:LocalStrageService) { 
this.service=userService;
}
save(form)
{
this.u.Name=this.name;
this.u.Password=this.password;
this.service.Login(this.u).subscribe(r=>{
if(r==true)
    alert("your password is wrong")
else if(r==false)
    this.act.navigate(["register/" + this.name]);
    else
{
  this.localStorage.currentUser.next(this.u);
  this.localStorage.setInStorage(this.u)
}
  });

  
}
}
