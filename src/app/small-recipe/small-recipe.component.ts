import { Component, OnInit,Input } from '@angular/core';
import Recipy from 'src/models/Recipy';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.css']
})
export class SmallRecipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
recipe:Recipy;

}
