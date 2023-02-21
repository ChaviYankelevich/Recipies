import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import User from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class LocalStrageService {
  currentUser = new BehaviorSubject<User>(null);
  constructor() {  }
  setInStorage(user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
}
getFromStorage() {
  let u = localStorage.getItem("currentUser");
  if (!u)
    return null;
  return JSON.parse(u);
}
removeFromStorage() {
  localStorage.removeItem("currentUser");
}
}
