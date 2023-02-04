import { Component } from '@angular/core';
import Layer from 'src/models/Layer';
import Recipy from 'src/models/Recipy';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
recipe:Recipy=new Recipy(null,null,null,null,null,null,null,null,null,null,null);
components:string[]=[];
lay:Layer[]=[];
index:number=0;
component:number=0;
com:string;
element:any;
wraper:any;
save(form)
{

}
changeCom(){
  console.log(this.com);
this.components.push(this.com);
this.element=document.getElementsByClassName("layers")[0];
this.element.removeAttribute('class','layers');
this.element.remove();
this.element=document.createElement("input");
console.log(this.element)
this.element.setAttribute('class', 'layers');
this.element.addEventListener('blur',this.changeCom)
this.element.setAttribute("[(ngModel)]","com")
this.element.setAttribute("name","layer")
this.element.setAttribute("layer","ngModel")

document.getElementById("wraperCom")?.appendChild(this.element)


}
}
