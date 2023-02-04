import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Recipy from "src/models/Recipy"
@Injectable({
  providedIn: 'root'
})
export class RecipeServiceTsService {
  id: any;

  constructor(public http:HttpClient) { }
   routeUrl = `${environment.baseUrl}/recipe`;
  getAllRecipes() {
    return this.http.get<Recipy[]>(`${this.routeUrl}/GetAllRecipes`);//מחזיר הבטחה שעוד מעט יגיע מערך של רולים
  }
  getRecipeById(id:number){
    return this.http.get<Recipy>(`${this.routeUrl}/GetRecipeById/${id}`);
  }
  getRecipesByCategoryId(category:number){
    return this.http.get<Recipy>(`${this.routeUrl}/GetRecipesByCategoryId/${category}`);
  }
  addRecipe(r:Recipy){
    return this.http.post<Recipy>(`${this.routeUrl}/AddRecipe`,r);
  }
  deleteRecipe(id:number){
    return this.http.delete<Recipy>(`${this.routeUrl}/ ${id}`);
  }
  putRecipe(r:Recipy){
    return this.http.put<Recipy>(`${this.routeUrl}/UpdateRecipe/${r.Id}`,r);
  }
  
}
