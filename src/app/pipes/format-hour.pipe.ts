import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatHour'
})
export class FormatHourPipe implements PipeTransform {
res:String="";
  transform(value: number): string {
    if(value<60)
        return `${value} דקות`;
    return `${value/60} שעות ${value%60} דקות`;
  }

}
