import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

// Got the idea from: https://github.com/urish/angular2-moment/blob/master/src/time-ago.pipe.ts

// under systemjs, moment is actually exported as the default export, so we account for that
const momentConstructor: (value?: any) => moment.Moment = (<any>moment).default || moment;

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  private text: string;

  transform(value: Date): string {
    const date = momentConstructor(value);
    const A_WEEK_AGO = momentConstructor().clone().subtract(7, 'days');
    if (date.isAfter(A_WEEK_AGO)) {
      this.text = date.from(momentConstructor(), false);
    } else {
      this.text = date.format('ll');
    }
    return this.text;
  }

}
