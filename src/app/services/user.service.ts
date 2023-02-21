import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import User from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
  routeUrl = `${environment.baseUrl}/user`;
  getAllUsers() {
    return this.http.get<User[]>(`${this.routeUrl}/GetAllUsers`);//מחזיר הבטחה שעוד מעט יגיע מערך של רולים
  }
  getUserById(id:number){
    return this.http.get<User>(`${this.routeUrl}/GetUserById/${id}`);
  }
  Login(user:User){
    return this.http.post<any>(`${this.routeUrl}/Login`,user);
  }
  Register(user:User){
    return this.http.post<any>(`${this.routeUrl}/Register`,user);
  }
  
  
}
