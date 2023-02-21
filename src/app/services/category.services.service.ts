import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Category from 'src/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http:HttpClient) { }
  routeUrl = `${environment.baseUrl}/category`;
  getAllCategories() {

    return this.http.get<Category[]>(`${this.routeUrl}/GetAllCategories`);//מחזיר הבטחה שעוד מעט יגיע מערך של רולים
  }
  getCategoryById(id:number){
    return this.http.get<Category>(`${this.routeUrl}/GetCategoryById/${id}`);
  }
  
}
