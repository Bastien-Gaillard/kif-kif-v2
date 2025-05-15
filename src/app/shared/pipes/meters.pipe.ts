import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meters',
  standalone: true
})
export class MetersPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value == null || isNaN(value)) return '';
    const meters = Math.round(value * 1000);
    return `${meters}m`;
  }

}
