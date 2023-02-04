import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {
stars:string[]=[];

  transform(value: number): string[] {
     for (let index = 0; index < value; index++) {
      this.stars.push("star (2).png");
      
     }
     console.log(this.stars)
    return this.stars;    
  }

}
