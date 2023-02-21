import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Category from 'src/models/Category';
import Layer from 'src/models/Layer';
import Recipy from 'src/models/Recipy';
import { CategoryService } from 'src/app/services/category.services.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

categories:Category[];

constructor(public categoryService:CategoryService,public act:Router){
  this.categoryService.getAllCategories().subscribe(c => {
    this.categories = c;
    console.log(this.categories);
});
}
recipe:Recipy=new Recipy(null,null,null,null,null,null,null,[],null,null,null);
components:string[]=[];
layers:Layer[]=[];
com:string;
element:any;
description:string;
layer:Layer=new Layer(null,null);
preperation:string;
category:string;
save(form)
{
this.recipe.CategoryId=this.categories.find(cat=>cat.Name==this.category).Id;
// swal("Good job!", "You clicked the button!", "success");
this.act.navigate(["all/",{recipe:JSON.stringify(this.recipe)}]);
}
onDesc(){
console.log("hi")
this.layers.push(new Layer(this.description,[]));
console.log(this.layers);
}
changeCom(){
if(this.layers.length==0)
      this.layers.push(new Layer("",[]));
this.layers[this.layers.length-1].Components.push(this.com);
this.element=document.getElementById("layers");
console.log(this.element)
this.element.value="";
}
changePre(){
  this.recipe.Preparation.push(this.preperation);
  this.element=document.getElementById("preperation");
console.log(this.element)
this.element.value="";
}
}
