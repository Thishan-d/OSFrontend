import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completedStatus',
  standalone: true
})
export class CompletedStatusPipe implements PipeTransform {

  transform(value: Boolean): string {
    if(value)
    {
      return "Completed";
    }
    else
    {
      return "In Completed";
    }
  }

}
