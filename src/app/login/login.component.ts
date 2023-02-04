import { Component } from '@angular/core';
import { UserService } from 'src/services/user.service';
import User from "src/models/User"
// import { Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
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
constructor(public UserService:UserService,public act:Router) { 
  // this.UserService.getAllUsers().subscribe(r => {
  //   this.users = r;
  //   console.log(r);
// });
this.service=UserService;
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
  });

  
}
}
