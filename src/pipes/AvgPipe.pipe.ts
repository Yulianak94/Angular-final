import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average'
})
export class AvgPipe implements PipeTransform {
  transform(items: any[]): any {
      return items.reduce((a, b) => a + +b, 0) / items.length;
  }
}