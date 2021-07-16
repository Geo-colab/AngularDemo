import { Pipe, PipeTransform } from '@angular/core';
import { TimePeriod } from '../models/time-period.enum';

@Pipe({
  name: 'timePeriod'
})
export class TimePeriodPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    if (value === TimePeriod.PerDay) return 'On Date';
    if (value === TimePeriod.PerMonth) return 'Per Month';
    if (value === TimePeriod.PerTaxYear) return 'Per Tax Year';
    
    return 'NA';
  }

}
